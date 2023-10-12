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

	async getAllLivres() {
		const db = await this.dbPromise;
		return db.all("SELECT * FROM livres");
	}

	async getLivreById(id) {
		const db = await this.dbPromise;
		return db.get("SELECT * FROM livres WHERE id = ?", id);
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

	async updateLivre(id, titre, date, id_auteur, id_genre) {
		const db = await this.dbPromise;
		return db.run(
			"UPDATE livres SET titre = ?, date = ?, id_auteur = ?, id_genre = ? WHERE id = ?",
			titre,
			date,
			id_auteur,
			id_genre,
			id
		);
	}

	async deleteLivre(id) {
		const db = await this.dbPromise;
		return db.run("DELETE FROM livres WHERE id = ?", id);
	}
}
