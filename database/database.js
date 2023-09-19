// Création de la base de données et des tables

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// Création de la base de données
export async function openDb() {
  return open({
    filename: './database/database.db',
    driver: sqlite3.Database
  })
}

// Création de la table "auteurs" qui a pour colonnes : id, nom, prenom

export async function createAuthorsTable(db) {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS auteurs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT,
            prenom TEXT
        )
    `)
}

// Création de la table "genres" qui a pour colonnes : id, genre

export async function createGenresTable(db) {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS genres (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            genre TEXT
        )
    `)
}

// Création de la table "livres" qui a pour colonnes : id, titre, date, id_auteur, id_genre

export async function createBooksTable(db) {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS livres (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titre TEXT,
            date TEXT,
            id_auteur INTEGER,
            id_genre INTEGER,
            FOREIGN KEY (id_auteur) REFERENCES auteurs(id),
            FOREIGN KEY (id_genre) REFERENCES genres(id)
        )
    `)
}

// Création de la base et des tables

export async function createTables() {
    const db = await openDb()
    await createAuthorsTable(db)
    await createGenresTable(db)
    await createBooksTable(db)
}

// Exécution

createTables()