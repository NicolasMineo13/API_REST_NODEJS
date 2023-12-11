import { expect } from 'chai';
import { AuteursSqliteDAO } from '../DAO/auteursSqliteDAO.js';

describe('AuteursSqliteDAO', () => {
    let auteursSqliteDAO;
    let createdAuteurId; // Added variable to store the ID of the created author

    it('should create a new auteur', async () => { // Add the title of the action
        auteursSqliteDAO = new AuteursSqliteDAO();
        const nom = 'John';
        const prenom = 'Doe';
        const result = await auteursSqliteDAO.createAuteur(nom, prenom);
        createdAuteurId = result.lastID; // Store the ID of the created author
    });

    it('should retrieve auteurs based on filter', async () => {
        const filter = { id: createdAuteurId }; // Use the ID of the created author
        const result = await auteursSqliteDAO.getAuteurs(filter);
        expect(result).to.be.an('array');
        expect(result.length).to.be.greaterThan(0);
    });

    it('should update an existing auteur', async () => {
        const updatedFields = { nom: 'Doe' };
        const result = await auteursSqliteDAO.updateAuteur(createdAuteurId, updatedFields); // Use the ID of the created author
        expect(result).to.be.true;
    });

    it('should delete an existing auteur', async () => {
        const result = await auteursSqliteDAO.deleteAuteur(createdAuteurId); // Use the ID of the created author
        expect(result).to.exist;
        expect(result.changes).to.be.a('number');
        expect(result.changes).to.be.greaterThan(0);
    });
});