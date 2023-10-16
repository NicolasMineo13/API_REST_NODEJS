// import express from "express";
// import { DAOSqliteFactory } from "./Factory/DAOSqliteFactory.js";

// const app = express();
// const PORT = 3000;
// const sqliteFactory = new DAOSqliteFactory();

// const auteursDao = sqliteFactory.createAuteursDAO();
// const genresDao = sqliteFactory.createGenresDAO();
// const livresDao = sqliteFactory.createLivresDAO();

// app.get("/auteurs", (req, res) => {
// 	const { id, nom, prenom } = req.query;
// 	let conditions = {};

// 	if (id) {
// 		conditions.id = id;
// 	}

// 	if (nom) {
// 		conditions.nom = nom;
// 	}

// 	if (prenom) {
// 		conditions.prenom = prenom;
// 	}

// 	// Appel au DAO pour récupérer les auteurs en appliquant les filtres
// 	auteursDao
// 		.getAuteurs(conditions)
// 		.then((auteurs) => {
// 			res.json({ auteurs });
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la récupération des auteurs",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.post("/auteurs", (req, res) => {
// 	const { nom, prenom } = req.query;

// 	// Appel au DAO pour créer un auteur
// 	auteursDao
// 		.createAuteur(nom, prenom)
// 		.then((auteur) => {
// 			res.json({ auteur });
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la création de l'auteur",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.patch("/auteurs/:id", (req, res) => {
// 	const { id } = req.params;
// 	const { nom, prenom } = req.query; // Utilisation des paramètres d'URL

// 	if (!id) {
// 		res.status(400).json({ error: "L'id de l'auteur est requis." });
// 		return;
// 	}

// 	// Appel au DAO pour mettre à jour un auteur
// 	auteursDao
// 		.updateAuteur(id, { nom, prenom }) // Envoi des paramètres mis à jour au DAO
// 		.then((auteur) => {
// 			if (auteur) {
// 				res.json({ message: "Auteur mis à jour avec succès." });
// 			} else {
// 				res.status(404).json({ error: "Auteur non trouvé." });
// 			}
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la mise à jour de l'auteur",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.delete("/auteurs", (req, res) => {
// 	const { id } = req.query;

// 	if (!id) {
// 		res.status(400).json({ error: "L'id de l'auteur est requis." });
// 		return;
// 	}

// 	// Appel au DAO pour supprimer un auteur
// 	auteursDao
// 		.deleteAuteur(id)
// 		.then((auteur) => {
// 			if (auteur) {
// 				res.json({ message: "Auteur supprimé avec succès." });
// 			} else {
// 				res.status(404).json({ error: "Auteur non trouvé." });
// 			}
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la suppression de l'auteur",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.get("/genres", (req, res) => {
// 	const { id, genre } = req.query;
// 	let conditions = {};

// 	if (id) {
// 		conditions.id = id;
// 	}

// 	if (genre) {
// 		conditions.genre = genre;
// 	}

// 	// Appel au DAO pour récupérer les genres en appliquant les filtres
// 	genresDao
// 		.getGenres(conditions)
// 		.then((genres) => {
// 			res.json({ genres });
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la récupération des genres",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.post("/genres", (req, res) => {
// 	const { genre } = req.query;

// 	// Appel au DAO pour créer un genre
// 	genresDao
// 		.createGenre(genre)
// 		.then((genre) => {
// 			res.json({ genre });
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la création du genre",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.patch("/genres/:id", (req, res) => {
// 	const { id } = req.params;
// 	const { genre } = req.query; // Utilisation des paramètres d'URL

// 	if (!id) {
// 		res.status(400).json({ error: "L'id du genre est requis." });
// 		return;
// 	}

// 	// Appel au DAO pour mettre à jour un genre
// 	genresDao
// 		.updateGenre(id, { genre }) // Envoi des paramètres mis à jour au DAO
// 		.then((genre) => {
// 			if (genre) {
// 				res.json({ message: "Genre mis à jour avec succès." });
// 			} else {
// 				res.status(404).json({ error: "Genre non trouvé." });
// 			}
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la mise à jour du genre",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.delete("/genres", (req, res) => {
// 	const { id } = req.query;

// 	if (!id) {
// 		res.status(400).json({ error: "L'id du genre est requis." });
// 		return;
// 	}

// 	// Appel au DAO pour supprimer un genre
// 	genresDao
// 		.deleteGenre(id)
// 		.then((genre) => {
// 			if (genre) {
// 				res.json({ message: "Genre supprimé avec succès." });
// 			} else {
// 				res.status(404).json({ error: "Genre non trouvé." });
// 			}
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la suppression du genre",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.get("/livres", (req, res) => {
// 	const { id, titre, date, id_auteur, id_genre } = req.query;
// 	let conditions = {};

// 	if (id) {
// 		conditions.id = id;
// 	}

// 	if (titre) {
// 		conditions.titre = titre;
// 	}

// 	if (date) {
// 		conditions.date = date;
// 	}

// 	if (id_auteur) {
// 		conditions.id_auteur = id_auteur;
// 	}

// 	if (id_genre) {
// 		conditions.id_genre = id_genre;
// 	}

// 	// Appel au DAO pour récupérer les livres en appliquant les filtres
// 	livresDao
// 		.getLivres(conditions)
// 		.then((livres) => {
// 			res.json({ livres });
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la récupération des livres",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.post("/livres", (req, res) => {
// 	const { titre, date, id_auteur, id_genre } = req.query;

// 	// Appel au DAO pour créer un livre
// 	livresDao
// 		.createLivre(titre, date, id_auteur, id_genre)
// 		.then((livre) => {
// 			res.json({ livre });
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la création du livre",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.patch("/livres/:id", (req, res) => {
// 	const { id } = req.params;
// 	const { titre, date, id_auteur, id_genre } = req.query; // Utilisation des paramètres d'URL

// 	if (!id) {
// 		res.status(400).json({ error: "L'id du livre est requis." });
// 		return;
// 	}

// 	// Appel au DAO pour mettre à jour un livre
// 	livresDao
// 		.updateLivre(id, { titre, date, id_auteur, id_genre }) // Envoi des paramètres mis à jour au DAO
// 		.then((livre) => {
// 			if (livre) {
// 				res.json({ message: "Livre mis à jour avec succès." });
// 			} else {
// 				res.status(404).json({ error: "Livre non trouvé." });
// 			}
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la mise à jour du livre",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.delete("/livres", (req, res) => {
// 	const { id } = req.query;

// 	if (!id) {
// 		res.status(400).json({ error: "L'id du livre est requis." });
// 		return;
// 	}

// 	// Appel au DAO pour supprimer un livre
// 	livresDao
// 		.deleteLivre(id)
// 		.then((livre) => {
// 			if (livre) {
// 				res.json({ message: "Livre supprimé avec succès." });
// 			} else {
// 				res.status(404).json({ error: "Livre non trouvé." });
// 			}
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				error: "Erreur lors de la suppression du livre",
// 				errorMsg: error.message,
// 			});
// 		});
// });

// app.listen(PORT, () => {
// 	console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
// });

import express from "express";
import auteursRoutes from "./Routes/auteurRoutes.js";
import genresRoutes from "./Routes/genreRoutes.js";
import livresRoutes from "./Routes/livreRoutes.js";

const app = express();
const PORT = 3000;

app.use("/auteurs", auteursRoutes);
app.use("/genres", genresRoutes);
app.use("/livres", livresRoutes);

app.listen(PORT, () => {
	console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
