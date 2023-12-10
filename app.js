import express from "express";
import auteursRoutes from "./Routes/auteursRoutes.js";
import genresRoutes from "./Routes/genresRoutes.js";
import livresRoutes from "./Routes/livresRoutes.js";
import utilisateursRoutes from "./Routes/utilisateursRoutes.js";
import { verifyToken } from "./Middlewares/verifyToken.js";

const app = express();
const PORT = 3000;

// Middleware pour servir les fichiers statiques depuis le dossier "public"
app.use(express.static("public"));

// Utilisation des routes
app.use("/auteurs", verifyToken, auteursRoutes);
app.use("/genres", verifyToken, genresRoutes);
app.use("/livres", verifyToken, livresRoutes);
app.use("/utilisateurs", utilisateursRoutes);
app.use("/verifyToken", verifyToken, (req, res) => {
	res.json({ status: true });
});

// Lancement du serveur
app.listen(PORT, () => {
	console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
