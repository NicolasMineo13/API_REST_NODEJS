import { expect } from 'chai';
import { UtilisateursDAO } from '../DAO/utilisateursDAO.js';

describe('UtilisateursDAO', () => {
    let utilisateursDAO;

    beforeEach(() => {
        utilisateursDAO = new UtilisateursDAO();
    });

    it('should throw an error when calling getUtilisateurs', () => {
        expect(() => utilisateursDAO.getUtilisateurs()).to.throw(Error, 'getUtilisateursByFilter method not implemented.');
    });

    it('should throw an error when calling createUtilisateur', () => {
        expect(() => utilisateursDAO.createUtilisateur()).to.throw(Error, 'createUtilisateur method not implemented.');
    });

    it('should throw an error when calling loginUtilisateur', () => {
        expect(() => utilisateursDAO.loginUtilisateur()).to.throw(Error, 'loginUtilisateur method not implemented.');
    });

    it('should throw an error when calling logoutUtilisateur', () => {
        expect(() => utilisateursDAO.logoutUtilisateur()).to.throw(Error, 'logoutUtilisateur method not implemented.');
    });

    it('should throw an error when calling updateUtilisateur', () => {
        expect(() => utilisateursDAO.updateUtilisateur()).to.throw(Error, 'updateUtilisateur method not implemented.');
    });

    it('should throw an error when calling deleteUtilisateur', () => {
        expect(() => utilisateursDAO.deleteUtilisateur()).to.throw(Error, 'deleteUtilisateur method not implemented.');
    });
});