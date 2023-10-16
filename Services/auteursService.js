import { DAOSqliteFactory } from "../Factory/DAOSqliteFactory.js";

const sqliteFactory = new DAOSqliteFactory();
const auteursDAO = sqliteFactory.createAuteursDAO();

const AuteursService = {
	getAuteurs: async (conditions) => {
		return await auteursDAO.getAuteurs(conditions);
	},

	createAuteur: async (nom, prenom) => {
		return await auteursDAO.createAuteur(nom, prenom);
	},

	updateAuteur: async (id, updatedFields) => {
		return await auteursDAO.updateAuteur(id, updatedFields);
	},

	deleteAuteur: async (id) => {
		return await auteursDAO.deleteAuteur(id);
	},
};

export default AuteursService;
