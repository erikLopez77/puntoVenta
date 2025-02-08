import express from "express";
import { nosotros, menu } from "../controllers/principal.js";

const router = express.Router();

router.get('/nosotros', nosotros);

router.get('/menu', menu);

export default router;