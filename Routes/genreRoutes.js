import { Router } from "express";
import * as genreController from "../Controller/genreController.js";

const router = Router();

router.get("/", genreController.getGenres);
router.post("/", genreController.createGenre);
router.patch("/:id", genreController.updateGenre);
router.delete("/:id", genreController.deleteGenre);

export default router;
