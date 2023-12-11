import UtilisateursService from "../Services/utilisateursService.js";
import jwt from "jsonwebtoken";

const UtilisateursController = {
	getUtilisateurs: async (req, res) => {
		const { id, login, password } = req.query;
		let conditions = {};

		if (id) {
			conditions.id = id;
		}

		if (login) {
			conditions.login = login;
		}

		if (password) {
			conditions.password = password;
		}

		try {
			const utilisateurs = await UtilisateursService.getUtilisateurs(
				conditions
			);
			res.json({ utilisateurs });
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la récupération des utilisateurs",
				errorMsg: error.message,
				test: "test",
			});
		}
	},

	createUtilisateur: async (req, res) => {
		const { login, password } = req.query;

		try {
			const newUtilisateur = await UtilisateursService.createUtilisateur(
				login,
				password
			);

			if (newUtilisateur instanceof Error) {
				res.json({ status: false, error: newUtilisateur.message });
			} else {
				res.json({ status: true });
			}
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la création de l'utilisateur",
				errorMsg: error.message,
			});
		}
	},

	loginUtilisateur: async (req, res) => {
		const { login, password } = req.query;
		try {
			const utilisateur = await UtilisateursService.loginUtilisateur(
				login,
				password
			);
			if (utilisateur) {
				res.json({ status: true, token: utilisateur.token, refreshtoken: utilisateur.refreshToken, id: utilisateur.id });
			} else {
				res.json({ status: false });
			}
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la connexion de l'utilisateur",
				errorMsg: error.message,
			});
		}
	},

	logoutUtilisateur: async (req, res) => {
		const { id } = req.params;

		try {
			const logout = await UtilisateursService.logoutUtilisateur(id);
			if (logout.status === true) {
				res.json({ status: true, message: "Utilisateur déconnecté avec succès." });
			} else {
				res.status(404).json({ error: "Utilisateur non connecté." });
			}
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la déconnexion de l'utilisateur",
				errorMsg: error.message,
			});
		}
	},

	updateUtilisateur: async (req, res) => {
		const { id } = req.params;
		const updatedFields = req.query;

		if (!id) {
			res.status(400).json({
				error: "L'id de l'utilisateur est requis.",
			});
			return;
		}

		try {
			const utilisateur = await UtilisateursService.updateUtilisateur(
				id,
				updatedFields
			);
			if (utilisateur) {
				res.json({ status: true, message: "Utilisateur mis à jour avec succès." });
			} else {
				res.status(404).json({ error: "Utilisateur non trouvé." });
			}
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la mise à jour de l'utilisateur",
				errorMsg: error.message,
			});
		}
	},

	deleteUtilisateur: async (req, res) => {
		const { id } = req.params;

		if (!id) {
			res.status(400).json({
				error: "L'id de l'utilisateur est requis.",
			});
			return;
		}

		try {
			const utilisateur = await UtilisateursService.deleteUtilisateur(id);
			if (utilisateur) {
				res.json({ status: true, message: "Utilisateur supprimé avec succès." });
			} else {
				res.status(404).json({ error: "Utilisateur non trouvé." });
			}
		} catch (error) {
			res.status(500).json({
				error: "Erreur lors de la suppression de l'utilisateur",
				errorMsg: error.message,
			});
		}
	},
};

export default UtilisateursController;
