import { expect } from 'chai';
import { AuteursDAO } from '../DAO/auteursDAO.js';

describe('AuteursDAO', () => {
    let auteursDAO;

    beforeEach(() => {
        auteursDAO = new AuteursDAO();
    });

    it('should throw an error when calling getAuteurs', () => {
        expect(() => auteursDAO.getAuteurs()).to.throw('getAuteursByFilter method not implemented.');
    });

    it('should throw an error when calling createAuteur', () => {
        expect(() => auteursDAO.createAuteur('John', 'Doe')).to.throw('createAuteur method not implemented.');
    });

    it('should throw an error when calling updateAuteur', () => {
        expect(() => auteursDAO.updateAuteur(1, { nom: 'Doe' })).to.throw('updateAuteur method not implemented.');
    });

    it('should throw an error when calling deleteAuteur', () => {
        expect(() => auteursDAO.deleteAuteur(1)).to.throw('deleteAuteur method not implemented.');
    });
});