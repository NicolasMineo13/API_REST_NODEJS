import express from "express";
import auteursRoutes from "./Routes/auteursRoutes.js";
import genresRoutes from "./Routes/genresRoutes.js";
import livresRoutes from "./Routes/livresRoutes.js";

const app = express();
const PORT = 3000;

// Utilisation des routes
app.use("/auteurs", auteursRoutes);
app.use("/genres", genresRoutes);
app.use("/livres", livresRoutes);

// Lancement du serveur
app.listen(PORT, () => {
	console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
