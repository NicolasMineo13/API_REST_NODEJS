import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

dotenv.config({ path: "./secretKey.env" });

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;
    const refreshToken = req.headers["refresh-token"];

    if (!token) {
        return res.status(403).json({ error: "Token manquant" });
    }

    if (!refreshToken) {
        return res.status(403).json({ error: "Refresh token manquant" });
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

    const blacklistRefresh = await db.get(
        "SELECT * FROM tokenblacklist WHERE token = ?",
        refreshToken
    );

    if (blacklistRefresh != undefined) {
        return res.status(403).json({ error: "Refresh token invalide" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            try {
                const decodedRefresh = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
                const newToken = jwt.sign({ userId: decodedRefresh.userId, login: decodedRefresh.login }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });

                const oldtoken = await db.get("SELECT token FROM utilisateurs WHERE id = ?", decodedRefresh.userId);

                if (!oldtoken) {
                    throw new Error("Utilisateur non connecté");
                }

                const addToken = await db.run("UPDATE utilisateurs SET token = ? WHERE id = ?", newToken, decodedRefresh.userId);

                if (addToken.changes < 1) {
                    throw new Error("Problème d'ajout du token");
                }

                const addBlacklist = await db.run("INSERT INTO tokenblacklist (token) VALUES (?)", oldtoken.token);

                if (addBlacklist.changes < 1) {
                    throw new Error("Problème d'insertion du token dans la blacklist");
                }

                return res.status(200).json({ status: true, token: newToken });
            } catch (refreshError) {
                console.error("Erreur de vérification du token de rafraîchissement :", refreshError.message);
                return res.status(401).json({ error: error.message });
            }
        } else {
            return res.status(401).json({ error: error.message });
        }
    }
};

export { verifyToken };