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

	async getAllGenres() {
		const db = await this.dbPromise;
		return db.all("SELECT * FROM genres");
	}

	async getGenreById(id) {
		const db = await this.dbPromise;
		return db.get("SELECT * FROM genres WHERE id = ?", id);
	}

	async createGenre(genre) {
		const db = await this.dbPromise;
		return db.run("INSERT INTO genres (genre) VALUES (?)", genre);
	}

	async updateGenre(id, genre) {
		const db = await this.dbPromise;
		return db.run("UPDATE genres SET genre = ? WHERE id = ?", genre, id);
	}

	async deleteGenre(id) {
		const db = await this.dbPromise;
		return db.run("DELETE FROM genres WHERE id = ?", id);
	}
}
