import { AuteursDAO } from "./auteursDAO.js";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export class AuteursSqliteDAO extends AuteursDAO {
	constructor() {
		super();
		this.dbPromise = open({
			filename: "./database/database.db",
			driver: sqlite3.Database,
		});
	}

	async getAuteurs(filter) {
		const db = await this.dbPromise;
		const conditions = [];
		const params = [];

		// Construisez les conditions en fonction des filtres
		if (filter.id) {
			conditions.push("id = ?");
			params.push(filter.id);
		}

		if (filter.nom) {
			conditions.push("nom = ?");
			params.push(filter.nom);
		}

		if (filter.prenom) {
			conditions.push("prenom = ?");
			params.push(filter.prenom);
		}

		// Construisez la requête
		let query = "SELECT * FROM auteurs";
		if (conditions.length > 0) {
			query += " WHERE " + conditions.join(" AND ");
		}

		return db.all(query, params);
	}

	async createAuteur(nom, prenom) {
		const db = await this.dbPromise;
		return db.run(
			"INSERT INTO auteurs (nom, prenom) VALUES (?, ?)",
			nom,
			prenom
		);
	}

	async updateAuteur(id, updatedFields) {
		const db = await this.dbPromise;

		const { nom, prenom } = updatedFields;

		// Construisez la requête en fonction des champs mis à jour
		let query = "UPDATE auteurs SET";
		const params = [];

		// console.log("Paramètres reçus :", updatedFields);

		if (nom) {
			query += " nom = ?,";
			params.push(nom);
		}

		if (prenom) {
			query += " prenom = ?,";
			params.push(prenom);
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

	async deleteAuteur(id) {
		const db = await this.dbPromise;
		return db.run("DELETE FROM auteurs WHERE id = ?", id);
	}
}
