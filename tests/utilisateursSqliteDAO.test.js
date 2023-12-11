import { expect } from 'chai';
import { UtilisateursSqliteDAO } from '../DAO/utilisateursSqliteDAO.js';

describe('UtilisateursSqliteDAO', () => {
    let utilisateursSqliteDAO;
    let createdUtilisateurId;

    it('should create a new utilisateur', async () => {
        utilisateursSqliteDAO = new UtilisateursSqliteDAO();
        const utilisateur = await utilisateursSqliteDAO.createUtilisateur('JohnDoe', 'Doe123456');
        createdUtilisateurId = utilisateur.lastID;
    });

    it('should retrieve utilisateurs based on filter', async () => {
        const filter = { id: createdUtilisateurId };
        const result = await utilisateursSqliteDAO.getUtilisateurs(filter);
        expect(result).to.be.an('array');
        expect(result.length).to.be.greaterThan(0);
    });

    it('should login an existing utilisateur', async () => {
        const result = await utilisateursSqliteDAO.loginUtilisateur('JohnDoe', 'Doe123456');
        expect(result).to.be.an('object');
        expect(result.status).to.be.true;
        expect(result.token).to.exist;
    });

    it('should logout an existing utilisateur', async () => {
        const result = await utilisateursSqliteDAO.logoutUtilisateur(createdUtilisateurId);
        expect(result).to.be.true;
    });

    it('should update an existing utilisateur', async () => {
        const updatedFields = { login: 'DoeJohn12' };
        const result = await utilisateursSqliteDAO.updateUtilisateur(createdUtilisateurId, updatedFields);
        expect(result).to.be.true;
    });

    it('should delete an existing utilisateur', async () => {
        const result = await utilisateursSqliteDAO.deleteUtilisateur(createdUtilisateurId);
        expect(result).to.exist;
        expect(result.changes).to.be.a('number');
        expect(result.changes).to.be.greaterThan(0);
    });

});