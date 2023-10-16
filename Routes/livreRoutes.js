import { Router } from "express";
import * as livreController from "../Controller/livreController.js";

const router = Router();

router.get("/", livreController.getLivres);
router.post("/", livreController.createLivre);
router.patch("/:id", livreController.updateLivre);
router.delete("/:id", livreController.deleteLivre);

export default router;
