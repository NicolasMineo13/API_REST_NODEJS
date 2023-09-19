// genresDAO.js

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// Création de la base de données
export async function openDb() {
  return open({
    filename: './database/database.db',
    driver: sqlite3.Database
  })
}

export async function getAllGenres() {
    const db = await openDb()
    return db.all('SELECT * FROM genres')
}

export async function getGenreById(id) {
    const db = await openDb()
    return db.get('SELECT * FROM genres WHERE id = ?', id)
}

export async function createGenre(genre) {
    const db = await openDb()
    return db.run('INSERT INTO genres (genre) VALUES (?)', genre)
}

export async function updateGenre(id, genre) {
    const db = await openDb()
    return db.run('UPDATE genres SET genre = ? WHERE id = ?', genre, id)
}

export async function deleteGenre(id) {
    const db = await openDb()
    return db.run('DELETE FROM genres WHERE id = ?', id)
}