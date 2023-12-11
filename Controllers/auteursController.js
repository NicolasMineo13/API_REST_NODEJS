import AuteursService from "../Services/auteursService.js";

const AuteursController = {
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
			const auteurs = await AuteursService.getAuteurs(conditions);
			res.json({ auteurs });
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la récupération des auteurs",
				errorMsg: error.message,
				test: "test",
			});
		}
	},

	createAuteur: async (req, res) => {
		const { nom, prenom } = req.query;

		try {
			const auteur = await AuteursService.createAuteur(nom, prenom);
			res.json({ auteur });
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
			const auteur = await AuteursService.updateAuteur(id, updatedFields);
			if (auteur) {
				res.json({ status: true, message: "Auteur mis à jour avec succès." });
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
		const { id } = req.params;

		if (!id) {
			res.status(400).json({ error: "L'id de l'auteur est requis." });
			return;
		}

		try {
			const auteur = await AuteursService.deleteAuteur(id);
			if (auteur) {
				res.json({ status: true, message: "Auteur supprimé avec succès." });
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

export default AuteursController;
