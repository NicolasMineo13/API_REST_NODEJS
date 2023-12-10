import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./secretKey.env" });

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ error: "Token manquant" });
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