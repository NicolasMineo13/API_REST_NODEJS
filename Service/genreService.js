const genreDao = require("../DAO/genresSqliteDAO");

const genreService = {
	getGenres: async () => {
		return genreDao.getAllGenres();
	},

	createGenre: async (nom) => {
		return genreDao.createGenre(nom);
	},

	updateGenre: async (id, nom) => {
		return genreDao.updateGenre(id, nom);
	},

	deleteGenre: async (id) => {
		return genreDao.deleteGenre(id);
	},
};

module.exports = genreService;
