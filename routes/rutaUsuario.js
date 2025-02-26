import express from "express";
import {
    login, loginPost, ordenPendiente, confirmarOrden, historial,
    crudMenu, editaPlatillo, eliminaPlatillo, logout, denegado
} from "../controllers/userControllers.js";
import { verificarAdmin } from "../middleware/midAdmin.js";
import { verificarCocinero } from "../middleware/kitchenMid.js";

const router = express.Router();

router.get('/iniciar-sesion', login);
router.post('/iniciar-sesion', loginPost);

router.get('/ordenes-pendientes', verificarCocinero, ordenPendiente);
router.post('/ordenes-pendientes', verificarCocinero, confirmarOrden);

router.get('/historial', verificarCocinero, historial);

router.get('/vista-menu', crudMenu);
router.post('/edita-platillo', editaPlatillo);
router.post('/elimina-platillo', eliminaPlatillo);

router.get('/cerrar-sesion', logout);
router.get('/acceso-denegado', denegado);
export default router;