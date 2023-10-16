const genreService = require("../Service/genreService");

const genreController = {
	getGenres: async (req, res) => {
		const { id, genre } = req.query;
		let conditions = {};

		if (id) {
			conditions.id = id;
		}

		if (genre) {
			conditions.genre = genre;
		}

		try {
			const genres = await genreService.getGenres(conditions);
			res.json({ genres });
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la récupération des genres",
				errorMsg: error.message,
			});
		}
	},

	createGenre: async (req, res) => {
		const { genre } = req.query;

		try {
			const newGenre = await genreService.createGenre(genre);
			res.json({ newGenre });
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la création du genre",
				errorMsg: error.message,
			});
		}
	},

	updateGenre: async (req, res) => {
		const { id } = req.params;
		const updatedFields = req.query;

		if (!id) {
			res.status(400).json({ error: "L'id du genre est requis." });
			return;
		}

		try {
			const genre = await genreService.updateGenre(id, updatedFields);
			if (genre) {
				res.json({ message: "Genre mis à jour avec succès." });
			} else {
				res.status(404).json({ error: "Genre non trouvé." });
			}
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la mise à jour du genre",
				errorMsg: error.message,
			});
		}
	},

	deleteGenre: async (req, res) => {
		const { id } = req.query;

		if (!id) {
			res.status(400).json({ error: "L'id du genre est requis." });
			return;
		}

		try {
			const genre = await genreService.deleteGenre(id);
			if (genre) {
				res.json({ message: "Genre supprimé avec succès." });
			} else {
				res.status(404).json({ error: "Genre non trouvé." });
			}
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la suppression du genre",
				errorMsg: error.message,
			});
		}
	},
};

module.exports = genreController;
