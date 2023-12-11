import { LivresDAO } from "./livresDAO.js";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export class LivresSqliteDAO extends LivresDAO {
	constructor() {
		super();
		this.dbPromise = open({
			filename: "./database/database.db",
			driver: sqlite3.Database,
		});
	}

	async getLivres(filter) {
		const db = await this.dbPromise;
		const conditions = [];
		const params = [];

		// Construisez les conditions en fonction des filtres
		if (filter.id) {
			conditions.push("id = ?");
			params.push(filter.id);
		}

		if (filter.titre) {
			conditions.push("titre = ?");
			params.push(filter.titre);
		}

		if (filter.date) {
			conditions.push("date = ?");
			params.push(filter.date);
		}

		if (filter.id_auteur) {
			conditions.push("id_auteur = ?");
			params.push(filter.id_auteur);
		}

		if (filter.id_genre) {
			conditions.push("id_genre = ?");
			params.push(filter.id_genre);
		}

		// Construisez la requête
		let query = "SELECT * FROM livres";
		if (conditions.length > 0) {
			query += " WHERE " + conditions.join(" AND ");
		}

		// Exécutez la requête
		return db.all(query, params);
	}

	async createLivre(titre, date, id_auteur, id_genre) {
		const db = await this.dbPromise;
		return db.run(
			"INSERT INTO livres (titre, date, id_auteur, id_genre) VALUES (?, ?, ?, ?)",
			titre,
			date,
			id_auteur,
			id_genre
		);
	}

	async updateLivre(id, updatedFields) {
		const db = await this.dbPromise;

		const { titre, date, id_auteur, id_genre } = updatedFields;

		// Construisez la requête en fonction des champs mis à jour
		let query = "UPDATE livres SET";
		const params = [];

		// console.log("Paramètres reçus :", updatedFields);

		if (titre) {
			query += " titre = ?,";
			params.push(titre);
		}

		if (date) {
			query += " date = ?,";
			params.push(date);
		}

		if (id_auteur) {
			query += " id_auteur = ?,";
			params.push(id_auteur);
		}

		if (id_genre) {
			query += " id_genre = ?,";
			params.push(id_genre);
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

	async deleteLivre(id) {
		const db = await this.dbPromise;

		const result = await db.run("DELETE FROM livres WHERE id = ?", id);

		if (result.changes > 0) {
			return true; // Suppression réussie
		} else {
			return false; // Aucun livre supprimé (id non trouvé)
		}
	}
}
