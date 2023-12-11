import { expect } from 'chai';
import { DAOSqliteFactory } from '../Factory/DAOSqliteFactory.js';
import { AuteursSqliteDAO } from '../DAO/auteursSqliteDAO.js';
import { GenresSqliteDAO } from '../DAO/genresSqliteDAO.js';
import { LivresSqliteDAO } from '../DAO/livresSqliteDAO.js';
import { UtilisateursSqliteDAO } from '../DAO/utilisateursSqliteDAO.js';

describe('DAOSqliteFactory', () => {
    let daoFactory;

    beforeEach(() => {
        daoFactory = new DAOSqliteFactory();
    });

    it('should create AuteursSqliteDAO', () => {
        const auteursDAO = daoFactory.createAuteursDAO();
        expect(auteursDAO).to.be.an.instanceOf(AuteursSqliteDAO);
    });

    it('should create GenresSqliteDAO', () => {
        const genresDAO = daoFactory.createGenresDAO();
        expect(genresDAO).to.be.an.instanceOf(GenresSqliteDAO);
    });

    it('should create LivresSqliteDAO', () => {
        const livresDAO = daoFactory.createLivresDAO();
        expect(livresDAO).to.be.an.instanceOf(LivresSqliteDAO);
    });

    it('should create UtilisateursSqliteDAO', () => {
        const utilisateursDAO = daoFactory.createUtilisateursDAO();
        expect(utilisateursDAO).to.be.an.instanceOf(UtilisateursSqliteDAO);
    });
});