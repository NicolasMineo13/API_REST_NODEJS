import { Router } from "express";
import * as auteurController from "../Controller/auteurController.js";

const router = Router();

router.get("/", auteurController.getAuteurs);
router.post("/", auteurController.createAuteur);
router.patch("/:id", auteurController.updateAuteur);
router.delete("/:id", auteurController.deleteAuteur);

export default router;
