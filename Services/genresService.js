import { DAOSqliteFactory } from "../Factory/DAOSqliteFactory.js";

const sqliteFactory = new DAOSqliteFactory();
const genresDAO = sqliteFactory.createGenresDAO();

const genresService = {
	getGenres: async (conditions) => {
		return await genresDAO.getGenres(conditions);
	},

	createGenre: async (nom) => {
		return await genresDAO.createGenre(nom);
	},

	updateGenre: async (id, nom) => {
		return await genresDAO.updateGenre(id, nom);
	},

	deleteGenre: async (id) => {
		return await genresDAO.deleteGenre(id);
	},
};

export default genresService;
