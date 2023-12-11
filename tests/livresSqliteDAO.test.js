import { expect } from 'chai';
import { LivresSqliteDAO } from '../DAO/livresSqliteDAO.js';

describe('LivresSqliteDAO', () => {
    let livresSqliteDAO;
    let createdLivreId;

    it('should create a new livre', async () => {
        livresSqliteDAO = new LivresSqliteDAO();
        const titre = 'Test';
        const date = '2023';
        const id_auteur = 1;
        const id_genre = 1;
        const result = await livresSqliteDAO.createLivre(titre, date, id_auteur, id_genre);
        createdLivreId = result.lastID;
    });

    it('should retrieve livres based on filter', async () => {
        const filter = { id: createdLivreId };
        const result = await livresSqliteDAO.getLivres(filter);
        expect(result).to.be.an('array');
        expect(result.length).to.be.greaterThan(0);
    });

    it('should update an existing livre', async () => {
        const updatedFields = { titre: 'Test' };
        const result = await livresSqliteDAO.updateLivre(createdLivreId, updatedFields);
        expect(result).to.be.true;
    });

    it('should delete an existing livre', async () => {
        const result = await livresSqliteDAO.deleteLivre(createdLivreId);
        expect(result).to.exist;
        expect(result).to.be.true;
    });
});