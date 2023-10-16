import express from "express";
import livresController from "../Controllers/livresController.js";

const router = express.Router();

router.get("/", livresController.getLivres);
router.post("/", livresController.createLivre);
router.patch("/:id", livresController.updateLivre);
router.delete("/:id", livresController.deleteLivre);

export default router;
