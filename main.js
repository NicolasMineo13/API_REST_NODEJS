import { DAOSqliteFactory } from "./DAO/DAOSqliteFactory.js";

const sqliteFactory = new DAOSqliteFactory();

// Création des DAO SQLite pour les auteurs, genres et livres
const auteursDao = sqliteFactory.createAuteursDAO();
const genresDao = sqliteFactory.createGenresDAO();
const livresDao = sqliteFactory.createLivresDAO();

// Utilisez les DAO selon vos besoins
auteursDao
	.getAllAuteurs()
	.then((auteurs) => {
		console.log("Liste des auteurs :", auteurs);
	})
	.catch((error) => {
		console.error("Erreur lors de la récupération des auteurs :", error);
	});

genresDao
	.getAllGenres()
	.then((genres) => {
		console.log("Liste des genres :", genres);
	})
	.catch((error) => {
		console.error("Erreur lors de la récupération des genres :", error);
	});

livresDao
	.getAllLivres()
	.then((livres) => {
		console.log("Liste des livres :", livres);
	})
	.catch((error) => {
		console.error("Erreur lors de la récupération des livres :", error);
	});
