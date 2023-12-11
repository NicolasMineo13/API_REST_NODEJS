import { UtilisateursDAO } from "./utilisateursDAO.js";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

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
		if (filter.id) {
			conditions.push("id = ?");
			params.push(filter.id);
		}

		if (filter.login) {
			conditions.push("login = ?");
			params.push(filter.login);
		}

		if (filter.password) {
			conditions.push("password = ?");
			params.push(filter.password);
		}

		// Construisez la requête
		let query = "SELECT * FROM utilisateurs";
		if (conditions.length > 0) {
			query += " WHERE " + conditions.join(" AND ");
		}

		return db.all(query, params);
	}

	async createUtilisateur(login, password) {
		const db = await this.dbPromise;

		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

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
				hashedPassword
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
			throw new Error("Identifiants incorrects 1 !");
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			utilisateur.password
		);

		if (!isPasswordCorrect) {
			throw new Error("Identifiants incorrects 2 !");
		}

		const oldtoken = utilisateur.token;
		const oldRefreshToken = utilisateur.refreshtoken;

		dotenv.config({ path: "./secretKey.env" });

		const secretKey = process.env.JWT_SECRET_KEY;
		const token = jwt.sign({ userId: utilisateur.id, login: utilisateur.login }, secretKey, { expiresIn: "15m" });
		const secretRefreshTokenKey = process.env.REFRESH_TOKEN_SECRET;
		const refreshToken = jwt.sign({ userId: utilisateur.id, login: utilisateur.login }, secretRefreshTokenKey, { expiresIn: "7d" });

		const addToken = await db.run("UPDATE utilisateurs SET token = ? WHERE id = ?", token, utilisateur.id);
		const addRefreshToken = await db.run("UPDATE utilisateurs SET refreshToken = ? WHERE id = ?", refreshToken, utilisateur.id);

		if (oldtoken) {
			const insertResult = await db.run("INSERT INTO tokenblacklist (token) VALUES (?)", oldtoken);
			if (insertResult.changes < 1) {
				throw new Error("Problème d'insertion du token dans la blacklist");
			}
		}

		if (oldRefreshToken) {
			const insertResult = await db.run("INSERT INTO tokenblacklist (token) VALUES (?)", oldRefreshToken);
			if (insertResult.changes < 1) {
				throw new Error("Problème d'insertion du token dans la blacklist");
			}
		}

		if (addToken.changes < 1) {
			throw new Error("Problème d'ajout du token");
		}

		if (addRefreshToken.changes < 1) {
			throw new Error("Problème d'ajout du refresh token");
		}

		return { status: true, token: token, refreshToken: refreshToken, id: utilisateur.id };
	}

	async logoutUtilisateur(id) {
		const db = await this.dbPromise;

		let response = await db.get(
			"SELECT token, refreshtoken FROM utilisateurs WHERE id = ?",
			id
		);

		if (!response || response.token === null) {
			return { status: false, error: "Utilisateur non connecté !" };
		}

		let updateResult = await db.run("UPDATE utilisateurs SET token = NULL, refreshtoken = NULL WHERE id = ?", id);

		if (updateResult.changes > 0) {
			let insertResult = await db.run("INSERT INTO tokenblacklist (token) VALUES (?)", response.token);
			let insertResultRefresh = await db.run("INSERT INTO tokenblacklist (token) VALUES (?)", response.refreshtoken);
			if (insertResult.changes > 0 && insertResultRefresh.changes > 0) {
				return { status: true, message: "Utilisateur déconnecté avec succès." };
			} else {
				return { status: false, error: "Problème insert" };
			}
		} else {
			return { status: false, error: "Problème update" }
		}
	}

	async updateUtilisateur(id, updatedFields) {
		const db = await this.dbPromise;

		const { login, password } = updatedFields;

		let query = "UPDATE utilisateurs SET";
		const params = [];

		// console.log("Paramètres reçus :", updatedFields);

		if (login) {
			query += " login = ?,";
			params.push(login);
		}

		if (password) {
			query += " password = ?,";
			const saltRounds = 10;
			const hashedPassword = await bcrypt.hash(password, saltRounds);
			params.push(hashedPassword);
		}

		query = query.slice(0, -1);
		query += " WHERE id = ?";
		params.push(id);

		// console.log("Requête SQL de mise à jour :", query);
		// console.log("Paramètres :", params);

		const result = await db.run(query, params);

		if (result.changes > 0) {
			return true; // Mise à jour réussie
		} else {
			return false; // Aucun utilisateur mis à jour (id non trouvé)
		}
	}

	async deleteUtilisateur(id) {
		const db = await this.dbPromise;
		const result = await db.run("DELETE FROM utilisateurs WHERE id = ?", id);
		if (result.changes > 0) {
			return true; // Suppression réussie
		} else {
			return false; // Aucun utilisateur supprimé (id non trouvé)
		}
	}
}
