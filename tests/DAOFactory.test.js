import { expect } from 'chai';
import { DAOFactory } from '../Factory/DAOFactory.js';

describe('DAOFactory', () => {
    let daoFactory;

    beforeEach(() => {
        daoFactory = new DAOFactory();
    });

    it('should throw an error for createAuteursDAO', () => {
        expect(() => daoFactory.createAuteursDAO()).to.throw('Method not implemented');
    });

    it('should throw an error for createGenresDAO', () => {
        expect(() => daoFactory.createGenresDAO()).to.throw('Method not implemented');
    });

    it('should throw an error for createLivresDAO', () => {
        expect(() => daoFactory.createLivresDAO()).to.throw('Method not implemented');
    });
});