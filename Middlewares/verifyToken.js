import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

dotenv.config({ path: "./secretKey.env" });

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ error: "Token manquant" });
    }

    const dbPromise = open({
        filename: "./database/database.db",
        driver: sqlite3.Database,
    });

    const db = await dbPromise;

    const blacklist = await db.get(
        "SELECT * FROM tokenblacklist WHERE token = ?",
        token
    );

    if (blacklist != undefined) {
        return res.status(403).json({ error: "Token invalide" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Erreur de vérification du token :", error.message);

        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ error: "Token expiré" });
        }

        return res.status(401).json({ error: "Token invalide" });
    }
};

export { verifyToken };