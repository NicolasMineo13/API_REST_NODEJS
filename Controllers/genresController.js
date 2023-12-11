import GenresServices from "../Services/genresService.js";

const genresController = {
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
			const genres = await GenresServices.getGenres(conditions);
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
			const newGenre = await GenresServices.createGenre(genre);
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
			const genre = await GenresServices.updateGenre(id, updatedFields);
			if (genre) {
				res.json({ status: true, message: "Genre mis à jour avec succès." });
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
		const { id } = req.params;

		if (!id) {
			res.status(400).json({ error: "L'id du genre est requis." });
			return;
		}

		try {
			const genre = await GenresServices.deleteGenre(id);
			if (genre) {
				res.json({ status: true, message: "Genre supprimé avec succès." });
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

export default genresController;
