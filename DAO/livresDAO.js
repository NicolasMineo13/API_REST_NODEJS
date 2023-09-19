// livresDAO.js

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// Création de la base de données
export async function openDb() {
  return open({
    filename: './database/database.db',
    driver: sqlite3.Database
  })
}

export async function getAllLivres() {
    const db = await openDb()
    return db.all('SELECT * FROM livres')
}

export async function getLivreById(id) {
    const db = await openDb()
    return db.get('SELECT * FROM livres WHERE id = ?', id)
}

export async function createLivre(titre, date, id_auteur, id_genre) {
    const db = await openDb()
    return db.run('INSERT INTO livres (titre, date, id_auteur, id_genre) VALUES (?, ?, ?, ?)', titre, date, id_auteur, id_genre)
}

export async function updateLivre(id, titre, date, id_auteur, id_genre) {
    const db = await openDb()
    return db.run('UPDATE livres SET titre = ?, date = ?, id_auteur = ?, id_genre = ? WHERE id = ?', titre, date, id_auteur, id_genre, id)
}

export async function deleteLivre(id) {
    const db = await openDb()
    return db.run('DELETE FROM livres WHERE id = ?', id)
}