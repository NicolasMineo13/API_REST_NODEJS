import express from "express";
import auteursController from "../Controllers/auteursController.js";

const router = express.Router();

router.get("/", auteursController.getAuteurs);
router.post("/", auteursController.createAuteur);
router.patch("/:id", auteursController.updateAuteur);
router.delete("/:id", auteursController.deleteAuteur);

export default router;
