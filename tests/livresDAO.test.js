import { expect } from 'chai';
import { LivresDAO } from '../DAO/livresDAO.js';

describe('LivresDAO', () => {
    let livresDAO;

    beforeEach(() => {
        livresDAO = new LivresDAO();
    });

    it('should throw an error when calling getLivres', () => {
        expect(() => livresDAO.getLivres()).to.throw(Error, 'getLivreByFilter method not implemented.');
    });

    it('should throw an error when calling createLivre', () => {
        expect(() => livresDAO.createLivre()).to.throw(Error, 'createLivre method not implemented.');
    });

    it('should throw an error when calling updateLivre', () => {
        expect(() => livresDAO.updateLivre()).to.throw(Error, 'updateLivre method not implemented.');
    });

    it('should throw an error when calling deleteLivre', () => {
        expect(() => livresDAO.deleteLivre()).to.throw(Error, 'deleteLivre method not implemented.');
    });
});