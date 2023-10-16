import auteurDao from "../DAO/auteursSqliteDAO.js";

const auteurService = {
	getAuteurs: async () => {
		return auteurDao.getAuteurs();
	},

	createAuteur: async (nom, prenom) => {
		return auteurDao.createAuteur(nom, prenom);
	},

	updateAuteur: async (id, updatedFields) => {
		return auteurDao.updateAuteur(id, updatedFields);
	},

	deleteAuteur: async (id) => {
		return auteurDao.deleteAuteur(id);
	},
};

export default auteurService;
