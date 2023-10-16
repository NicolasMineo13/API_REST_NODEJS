const livreService = require("../Service/livreService.js");

const livreController = {
	getLivres: async (req, res) => {
		const { id, titre, date, id_auteur, id_genre } = req.query;
		let conditions = {};

		if (id) {
			conditions.id = id;
		}

		if (titre) {
			conditions.titre = titre;
		}

		if (date) {
			conditions.date = date;
		}

		if (id_auteur) {
			conditions.id_auteur = id_auteur;
		}

		if (id_genre) {
			conditions.id_genre = id_genre;
		}

		try {
			const livres = await livreService.getLivres(conditions);
			res.json({ livres });
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la récupération des livres",
				errorMsg: error.message,
			});
		}
	},

	createLivre: async (req, res) => {
		const { titre, date, id_auteur, id_genre } = req.query;

		try {
			const livre = await livreService.createLivre(
				titre,
				date,
				id_auteur,
				id_genre
			);
			res.json({ livre });
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la création du livre",
				errorMsg: error.message,
			});
		}
	},

	updateLivre: async (req, res) => {
		const { id } = req.params;
		const updatedFields = req.query;

		if (!id) {
			res.status(400).json({ error: "L'id du livre est requis." });
			return;
		}

		try {
			const livre = await livreService.updateLivre(id, updatedFields);
			if (livre) {
				res.json({ message: "Livre mis à jour avec succès." });
			} else {
				res.status(404).json({ error: "Livre non trouvé." });
			}
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la mise à jour du livre",
				errorMsg: error.message,
			});
		}
	},

	deleteLivre: async (req, res) => {
		const { id } = req.query;

		if (!id) {
			res.status(400).json({ error: "L'id du livre est requis." });
			return;
		}

		try {
			const livre = await livreService.deleteLivre(id);
			if (livre) {
				res.json({ message: "Livre supprimé avec succès." });
			} else {
				res.status(404).json({ error: "Livre non trouvé." });
			}
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la suppression du livre",
				errorMsg: error.message,
			});
		}
	},
};

module.exports = livreController;
