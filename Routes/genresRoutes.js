import express from "express";
import genresController from "../Controllers/genresController.js";

const router = express.Router();

router.get("/", genresController.getGenres);
router.post("/", genresController.createGenre);
router.patch("/:id", genresController.updateGenre);
router.delete("/:id", genresController.deleteGenre);

export default router;
