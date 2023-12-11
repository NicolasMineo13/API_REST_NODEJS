async function updateLivreFilters(id, originalTitle, originalDate, originalAuthor, originalGenre) {
    updateLivre(id, originalTitle, originalDate, originalAuthor, originalGenre);
}

async function updateAuteurFilters(id, originalNom, originalPrenom) {
    updateAuteur(id, originalNom, originalPrenom);
}

async function updateGenreFilters(id, originalGenre) {
    updateGenre(id, originalGenre);
}

async function updateUtilisateurFilters(id, originalLogin, originalPassword) {
    updateUtilisateur(id, originalLogin, originalPassword);
}