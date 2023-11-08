import express from "express";
import jwt from "jsonwebtoken";
import auteursRoutes from "./Routes/auteursRoutes.js";
import genresRoutes from "./Routes/genresRoutes.js";
import livresRoutes from "./Routes/livresRoutes.js";
import utilisateursRoutes from "./Routes/utilisateursRoutes.js";

const app = express();
const PORT = 3000;

app.get("/jwt", (req, res) => {
	const createTokenFromJson = (jsonData, secretKey, options = {}) => {
		try {
			const secretKey = "test";
			const token = jwt.sign(jsonData, secretKey, options);
			return token;
		} catch (error) {
			console.log("Erreur: ", error.message);
			return null;
		}
	};

	const jsonData = { email: "test@gmail.com", password: "123456" };
	const token = createTokenFromJson(jsonData);

	if (token) {
		res.json({ status: true, token: token });
	} else {
		res.json({ status: false });
	}
});

// Utilisation des routes
app.use("/auteurs", auteursRoutes);
app.use("/genres", genresRoutes);
app.use("/livres", livresRoutes);
app.use("/utilisateurs", utilisateursRoutes);

// Lancement du serveur
app.listen(PORT, () => {
	console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
