import { GenresDAO } from "./genresDAO.js";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export class GenresSqliteDAO extends GenresDAO {
	constructor() {
		super();
		this.dbPromise = open({
			filename: "./database/database.db",
			driver: sqlite3.Database,
		});
	}

	async getGenres(filter) {
		const db = await this.dbPromise;
		const conditions = [];
		const params = [];

		// Construisez les conditions en fonction des filtres
		if (filter.id) {
			conditions.push("id = ?");
			params.push(filter.id);
		}

		if (filter.genre) {
			conditions.push("genre = ?");
			params.push(filter.genre);
		}

		// Construisez la requête
		let query = "SELECT * FROM genres";
		if (conditions.length > 0) {
			query += " WHERE " + conditions.join(" AND ");
		}

		// Exécutez la requête
		return db.all(query, params);
	}

	async createGenre(genre) {
		const db = await this.dbPromise;
		return db.run("INSERT INTO genres (genre) VALUES (?)", genre);
	}

	async updateGenre(id, updatedFields) {
		const db = await this.dbPromise;

		const { genre } = updatedFields;

		// Construisez la requête en fonction des champs mis à jour
		let query = "UPDATE genres SET";
		const params = [];

		// console.log("Paramètres reçus :", updatedFields);

		if (genre) {
			query += " genre = ?,";
			params.push(genre);
		}

		// Supprimez la dernière virgule et ajoutez la clause WHERE
		query = query.slice(0, -1);
		query += " WHERE id = ?";
		params.push(id);

		// console.log("Requête SQL de mise à jour :", query);
		// console.log("Paramètres :", params);

		const result = await db.run(query, params);

		if (result.changes > 0) {
			return true; // Mise à jour réussie
		} else {
			return false; // Aucun livre mis à jour (id non trouvé)
		}
	}

	async deleteGenre(id) {
		const db = await this.dbPromise;
		const result = await db.run("DELETE FROM genres WHERE id = ?", id);
		if (result.changes > 0) {
			return true; // Suppression réussie
		} else {
			return false; // Aucun livre supprimé (id non trouvé)
		}
	}
}
