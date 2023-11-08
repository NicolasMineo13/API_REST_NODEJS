import { DAOSqliteFactory } from "../Factory/DAOSqliteFactory.js";

const sqliteFactory = new DAOSqliteFactory();
const utilisateursDAO = sqliteFactory.createUtilisateursDAO();

const UtilisateursService = {
	getUtilisateurs: async (conditions) => {
		return await utilisateursDAO.getUtilisateurs(conditions);
	},

	createUtilisateur: async (login, password) => {
		return await utilisateursDAO.createUtilisateur(login, password);
	},

	updateUtilisateur: async (id, updatedFields) => {
		return await utilisateursDAO.updateUtilisateur(id, updatedFields);
	},

	deleteUtilisateur: async (id) => {
		return await utilisateursDAO.deleteUtilisateur(id);
	},
};

export default UtilisateursService;
