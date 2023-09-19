// auteursDAO.js

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// Création de la base de données
export async function openDb() {
  return open({
    filename: './database/database.db',
    driver: sqlite3.Database
  })
}

export async function getAllAuteurs() {
    const db = await openDb()
    return db.all('SELECT * FROM auteurs')
}

export async function getAuteurById(id) {
    const db = await openDb()
    return db.get('SELECT * FROM auteurs WHERE id = ?', id)
}

export async function createAuteur(nom, prenom) {
    const db = await openDb()
    return db.run('INSERT INTO auteurs (nom, prenom) VALUES (?, ?)', nom, prenom)
}

export async function updateAuteur(id, nom, prenom) {
    const db = await openDb()
    return db.run('UPDATE auteurs SET nom = ?, prenom = ? WHERE id = ?', nom, prenom, id)
}

export async function deleteAuteur(id) {
    const db = await openDb()
    return db.run('DELETE FROM auteurs WHERE id = ?', id)
}