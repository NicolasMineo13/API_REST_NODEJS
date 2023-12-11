import express from "express";
import utilisateursController from "../Controllers/utilisateursController.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

const router = express.Router();

// Routes publiques
router.post("/login", utilisateursController.loginUtilisateur);

// Routes privées
router.post("/logout/:id", verifyToken, utilisateursController.logoutUtilisateur);
router.get("/", verifyToken, utilisateursController.getUtilisateurs);
router.patch("/:id", verifyToken, utilisateursController.updateUtilisateur);
router.delete("/:id", verifyToken, utilisateursController.deleteUtilisateur);
router.post("/", verifyToken, utilisateursController.createUtilisateur);

export default router;