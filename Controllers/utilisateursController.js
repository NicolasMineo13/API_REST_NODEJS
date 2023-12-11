import UtilisateursService from "../Services/utilisateursService.js";
import bcrypt from "bcrypt";
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

		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		try {
			const newUtilisateur = await UtilisateursService.createUtilisateur(
				login,
				hashedPassword
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
				const secretKey = process.env.JWT_SECRET_KEY;
				const token = jwt.sign({ userId: utilisateur.id, login: utilisateur.login }, secretKey, { expiresIn: "15m" });
				res.json({ status: true, token: token });
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
