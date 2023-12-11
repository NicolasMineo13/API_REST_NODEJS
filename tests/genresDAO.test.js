import { expect } from 'chai';
import { GenresDAO } from '../DAO/genresDAO.js';

describe('GenresDAO', () => {
    let genresDAO;

    beforeEach(() => {
        genresDAO = new GenresDAO();
    });

    it('should throw an error for getGenres', () => {
        expect(() => genresDAO.getGenres()).to.throw(Error, 'getGenreByFilter method not implemented.');
    });

    it('should throw an error for createGenre', () => {
        expect(() => genresDAO.createGenre()).to.throw(Error, 'createGenre method not implemented.');
    });

    it('should throw an error for updateGenre', () => {
        expect(() => genresDAO.updateGenre()).to.throw(Error, 'updateGenre method not implemented.');
    });

    it('should throw an error for deleteGenre', () => {
        expect(() => genresDAO.deleteGenre()).to.throw(Error, 'deleteGenre method not implemented.');
    });
});