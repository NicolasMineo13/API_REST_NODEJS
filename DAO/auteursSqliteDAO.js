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

	async getAllAuteurs() {
		const db = await this.dbPromise;
		return db.all("SELECT * FROM auteurs");
	}

	async getAuteurById(id) {
		const db = await this.dbPromise;
		return db.get("SELECT * FROM auteurs WHERE id = ?", id);
	}

	async createAuteur(nom, prenom) {
		const db = await this.dbPromise;
		return db.run(
			"INSERT INTO auteurs (nom, prenom) VALUES (?, ?)",
			nom,
			prenom
		);
	}

	async updateAuteur(id, nom, prenom) {
		const db = await this.dbPromise;
		return db.run(
			"UPDATE auteurs SET nom = ?, prenom = ? WHERE id = ?",
			nom,
			prenom,
			id
		);
	}

	async deleteAuteur(id) {
		const db = await this.dbPromise;
		return db.run("DELETE FROM auteurs WHERE id = ?", id);
	}
}
