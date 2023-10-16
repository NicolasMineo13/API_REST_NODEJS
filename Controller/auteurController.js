import auteurService from "../Service/auteurService.js";

const auteurController = {
	getAuteurs: async (req, res) => {
		const { id, nom, prenom } = req.query;
		let conditions = {};

		if (id) {
			conditions.id = id;
		}

		if (nom) {
			conditions.nom = nom;
		}

		if (prenom) {
			conditions.prenom = prenom;
		}

		try {
			const auteurs = await auteurService.getAuteurs(conditions);
			res.json({ auteurs });
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la récupération des auteurs",
				errorMsg: error.message,
			});
		}
	},

	createAuteur: async (req, res) => {
		const { nom, prenom } = req.query;

		try {
			const newAuteur = await auteurService.createAuteur(nom, prenom);
			res.json({ newAuteur });
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la création de l'auteur",
				errorMsg: error.message,
			});
		}
	},

	updateAuteur: async (req, res) => {
		const { id } = req.params;
		const updatedFields = req.query;

		if (!id) {
			res.status(400).json({ error: "L'id de l'auteur est requis." });
			return;
		}

		try {
			const auteur = await auteurService.updateAuteur(id, updatedFields);
			if (auteur) {
				res.json({ message: "Auteur mis à jour avec succès." });
			} else {
				res.status(404).json({ error: "Auteur non trouvé." });
			}
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la mise à jour de l'auteur",
				errorMsg: error.message,
			});
		}
	},

	deleteAuteur: async (req, res) => {
		const { id } = req.query;

		if (!id) {
			res.status(400).json({ error: "L'id de l'auteur est requis." });
			return;
		}

		try {
			const auteur = await auteurService.deleteAuteur(id);
			if (auteur) {
				res.json({ message: "Auteur supprimé avec succès." });
			} else {
				res.status(404).json({ error: "Auteur non trouvé." });
			}
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la suppression de l'auteur",
				errorMsg: error.message,
			});
		}
	},
};

module.exports = auteurController;
