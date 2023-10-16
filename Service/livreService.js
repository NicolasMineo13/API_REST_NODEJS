const livreDao = require("../DAO/livresSqliteDAO");

const livreService = {
	getLivres: async () => {
		return livreDao.getLivres();
	},

	createLivre: async (titre, date, id_auteur, id_genre) => {
		return livreDao.createLivre(titre, date, id_auteur, id_genre);
	},

	updateLivre: async (id, updatedFields) => {
		return livreDao.updateLivre(id, updatedFields);
	},

	deleteLivre: async (id) => {
		return livreDao.deleteLivre(id);
	},
};

module.exports = livreService;
