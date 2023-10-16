import { DAOSqliteFactory } from "../Factory/DAOSqliteFactory.js";

const sqliteFactory = new DAOSqliteFactory();
const livresDAO = sqliteFactory.createLivresDAO();

const livresService = {
	getLivres: async (conditions) => {
		return await livresDAO.getLivres(conditions);
	},

	createLivre: async (titre, date, id_auteur, id_genre) => {
		return await livresDAO.createLivre(titre, date, id_auteur, id_genre);
	},

	updateLivre: async (id, updatedFields) => {
		return await livresDAO.updateLivre(id, updatedFields);
	},

	deleteLivre: async (id) => {
		return await livresDAO.deleteLivre(id);
	},
};

export default livresService;
