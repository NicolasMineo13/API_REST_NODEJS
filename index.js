// Importez les fichiers DAO
// import * as database from './database/database.js';
import * as auteursDAO from './DAO/auteursDAO.js';
import * as livresDAO from './DAO/livresDAO.js';
import * as genresDAO from './DAO/genresDAO.js';

// Créer un jeu de donnéees avec auteursDAO.createAuteur('Nom', 'Prenom')

// auteursDAO.createAuteur('Hugo', 'Victor');
// auteursDAO.createAuteur('Zola', 'Emile');
// auteursDAO.createAuteur('Maupassant', 'Guy');
// auteursDAO.createAuteur('Dumas', 'Alexandre');
// auteursDAO.createAuteur('Camus', 'Albert');
// auteursDAO.createAuteur('Flaubert', 'Gustave');
// auteursDAO.createAuteur('Balzac', 'Honoré');
// auteursDAO.createAuteur('Rousseau', 'Jean-Jacques');
// auteursDAO.createAuteur('Voltaire', 'François-Marie');
// auteursDAO.createAuteur('Molière', 'Jean-Baptiste');

// auteursDAO.getAllAuteurs().then((auteurs) => {
//     console.log(auteurs);
// }
// );

// genresDAO.createGenre('Roman');
// genresDAO.createGenre('Nouvelle');
// genresDAO.createGenre('Théâtre');
// genresDAO.createGenre('Poésie');
// genresDAO.createGenre('Essai');
// genresDAO.createGenre('Biographie');
// genresDAO.createGenre('Autobiographie');
// genresDAO.createGenre('Journal');
// genresDAO.createGenre('Lettre');
// genresDAO.createGenre('Conte');

// genresDAO.getAllGenres().then((genres) => {
//     console.log(genres);
// }
// );

// Il faut le champ titre, date, id auteur, id genre

// livresDAO.createLivre('Les Misérables', '1862', 1, 1);
// livresDAO.createLivre('Notre-Dame de Paris', '1831', 1, 1);
// livresDAO.createLivre('Les Travailleurs de la mer', '1866', 1, 1);
// livresDAO.createLivre('L\'Assommoir', '1877', 2, 1);
// livresDAO.createLivre('Germinal', '1885', 2, 1);
// livresDAO.createLivre('Nana', '1880', 2, 1);
// livresDAO.createLivre('Bel-Ami', '1885', 3, 1);
// livresDAO.createLivre('Une vie', '1883', 3, 1);
// livresDAO.createLivre('Pierre et Jean', '1888', 3, 1);
// livresDAO.createLivre('Le Comte de Monte-Cristo', '1844', 4, 1);
// livresDAO.createLivre('Les Trois Mousquetaires', '1844', 4, 1);
// livresDAO.createLivre('Le Vicomte de Bragelonne', '1847', 4, 1);
// livresDAO.createLivre('L\'Étranger', '1942', 5, 1);
// livresDAO.createLivre('La Peste', '1947', 5, 1);
// livresDAO.createLivre('La Chute', '1956', 5, 1);
// livresDAO.createLivre('Madame Bovary', '1857', 6, 1);
// livresDAO.createLivre('Salammbô', '1862', 6, 1);
// livresDAO.createLivre('L\'Éducation sentimentale', '1869', 6, 1);
// livresDAO.createLivre('Le Père Goriot', '1835', 7, 1);
// livresDAO.createLivre('Le Colonel Chabert', '1832', 7, 1);
// livresDAO.createLivre('Le Lys dans la vallée', '1836', 7, 1);
// livresDAO.createLivre('Les Confessions', '1782', 8, 1);
// livresDAO.createLivre('Émile ou De l\'éducation', '1762', 8, 1);
// livresDAO.createLivre('Du contrat social', '1762', 8, 1);
// livresDAO.createLivre('Candide', '1759', 9, 1);
// livresDAO.createLivre('Zadig', '1747', 9, 1);
// livresDAO.createLivre('L\'Ingénu', '1767', 9, 1);
// livresDAO.createLivre('Le Malade imaginaire', '1673', 10, 1);
// livresDAO.createLivre('Le Misanthrope', '1666', 10, 1);
// livresDAO.createLivre('L\'Avare', '1668', 10, 1);

// livresDAO.getAllLivres().then((livres) => {
//     console.log(livres);
// }
// );