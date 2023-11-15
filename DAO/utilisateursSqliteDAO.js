import { UtilisateursDAO } from "./utilisateursDAO.js";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import bcrypt from "bcrypt";

export class UtilisateursSqliteDAO extends UtilisateursDAO {
	constructor() {
		super();
		this.dbPromise = open({
			filename: "./database/database.db",
			driver: sqlite3.Database,
		});
	}

	async getUtilisateurs(filter) {
		const db = await this.dbPromise;
		const conditions = [];
		const params = [];

		// Construisez les conditions en fonction des filtres
		// if (filter.id) {
			// conditions.push("id = ?");
			// params.push(filter.id);
		// }

		conditions.push("login = ?");
		params.push(filter.login);

		conditions.push("password = ?");
		params.push(filter.password);

		// Construisez la requête
		let query = "SELECT * FROM utilisateurs";
		query += " WHERE " + conditions.join(" AND ");

		return db.all(query, params);
	}

	async createUtilisateur(login, password) {
		const db = await this.dbPromise;
		
		const utilisateur = await db.get(
			"SELECT * FROM utilisateurs WHERE login = ?",
			login
		);

		if (utilisateur) {
			return new Error("Ce login existe déjà !");
		} else {
			return db.run(
				"INSERT INTO utilisateurs (login, password) VALUES (?, ?)",
				login,
				password
			);
		}
	}
	
	async loginUtilisateur(login, password) {
		const db = await this.dbPromise;
	
		const utilisateur = await db.get(
			"SELECT * FROM utilisateurs WHERE login = ?",
			login
		);
	
		if (!utilisateur) {
			throw new Error("Identifiants incorrects !");
		}
	
		const isPasswordCorrect = await bcrypt.compare(
			password,
			utilisateur.password
		);
	
		if (!isPasswordCorrect) {
			throw new Error("Identifiants incorrects !");
		}
	
		return utilisateur;
	}
	
	async updateUtilisateur(id, updatedFields) {
		const db = await this.dbPromise;

		const { login, password } = updatedFields;

		// Construisez la requête en fonction des champs mis à jour
		let query = "UPDATE utilisateurs SET";
		const params = [];

		console.log("Paramètres reçus :", updatedFields);

		if (login) {
			query += " login = ?,";
			params.push(login);
		}

		if (password) {
			query += " password = ?,";
			params.push(password);
		}

		// Supprimez la dernière virgule et ajoutez la clause WHERE
		query = query.slice(0, -1);
		query += " WHERE id = ?";
		params.push(id);

		console.log("Requête SQL de mise à jour :", query);
		console.log("Paramètres :", params);

		const result = await db.run(query, params);

		if (result.changes > 0) {
			return true; // Mise à jour réussie
		} else {
			return false; // Aucun utilisateur mis à jour (id non trouvé)
		}
	}

	async deleteUtilisateur(id) {
		const db = await this.dbPromise;
		return db.run("DELETE FROM utilisateurs WHERE id = ?", id);
	}
}
