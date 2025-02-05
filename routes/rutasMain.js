import express from "express";
import { menu } from "../controllers/principal.js";

const router = express.Router();

router.get('/principal', menu);

export default router;