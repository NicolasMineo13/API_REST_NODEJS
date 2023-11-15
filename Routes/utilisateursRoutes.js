import express from "express";
import utilisateursController from "../Controllers/utilisateursController.js";

const router = express.Router();

router.get("/", utilisateursController.getUtilisateurs);
router.post("/create", utilisateursController.createUtilisateur);
router.post("/login", utilisateursController.loginUtilisateur);
router.patch("/:id", utilisateursController.updateUtilisateur);
router.delete("/:id", utilisateursController.deleteUtilisateur);

export default router;
