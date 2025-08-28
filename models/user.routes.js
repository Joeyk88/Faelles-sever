import express from "express";
import { addAnswer, getUserWithAnswers } from "../handlers/user.handler.js";

const router = express.Router();

// Tilføj svar til en bruger
router.post("/:userId/answers", addAnswer);

// Hent bruger med quiz-svar
router.get("/:userId", getUserWithAnswers);

export default router;
