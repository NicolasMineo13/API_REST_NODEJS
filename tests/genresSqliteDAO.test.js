import { expect } from 'chai';
import { GenresSqliteDAO } from '../DAO/genresSqliteDAO.js';

describe('GenresSqliteDAO', () => {
    let genresSqliteDAO;
    let createdGenreId;

    it('should create a new genre', async () => {
        genresSqliteDAO = new GenresSqliteDAO();
        const genre = 'Test';
        const result = await genresSqliteDAO.createGenre(genre);
        createdGenreId = result.lastID;
    });

    it('should retrieve genres based on filter', async () => {
        const filter = { id: createdGenreId };
        const result = await genresSqliteDAO.getGenres(filter);
        expect(result).to.be.an('array');
        expect(result.length).to.be.greaterThan(0);
    });

    it('should update an existing genre', async () => {
        const updatedFields = { genre: 'Test' };
        const result = await genresSqliteDAO.updateGenre(createdGenreId, updatedFields);
        expect(result).to.be.true;
    });

    it('should delete an existing genre', async () => {
        const result = await genresSqliteDAO.deleteGenre(createdGenreId);
        expect(result).to.exist;
        expect(result).to.be.true;
    });
});