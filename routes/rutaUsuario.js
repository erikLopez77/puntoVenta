import express from "express";
import { login, loginPost, ordenPendiente, confirmarOrden, historial, logout } from "../controllers/userControllers.js";
import { verificarAutorizacion } from "../middleware/usuarioMid.js";

const router = express.Router();

router.get('/iniciar-sesion', login);
router.post('/iniciar-sesion', loginPost);

router.get('/ordenes-pendientes', verificarAutorizacion, ordenPendiente);
router.post('/ordenes-pendientes', verificarAutorizacion, confirmarOrden);

router.get('/historial', verificarAutorizacion, historial);
router.get('/cerrar-sesion', logout);
export default router;