import express from "express";
import { login, loginPost, ordenPendiente, confirmarOrden, historial } from "../controllers/userControllers.js";

const router = express.Router();

router.get('/login', login);
router.post('/login', loginPost);

router.get('/ordenes-pendientes', ordenPendiente);
router.post('/ordenes-pendientes', confirmarOrden);

router.get('/historial', historial);

export default router;