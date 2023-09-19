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

auteursDAO.getAllAuteurs().then((auteurs) => {
    console.log(auteurs);
}
);