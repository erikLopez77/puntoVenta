import express from "express";
import {
    login, loginPost, ordenPendiente, confirmarOrden, historial,
    crudMenu, creaPlatillo, postPlatillo, editaPlatillo,editaPlatilloPost, eliminaPlatillo, logout, denegado
} from "../controllers/userControllers.js";
import { verificarAdmin } from "../middleware/midAdmin.js";
import { verificarCocinero } from "../middleware/kitchenMid.js";

const router = express.Router();

router.get('/iniciar-sesion', login);
router.post('/iniciar-sesion', loginPost);
//cocineros
router.get('/ordenes-pendientes', verificarCocinero, ordenPendiente);
router.post('/ordenes-pendientes', verificarCocinero, confirmarOrden);

router.get('/historial', verificarCocinero, historial);
//admin
router.get('/vista-menu', crudMenu);
router.get('/crear-platillo', creaPlatillo);
router.post('/crear-platillo', postPlatillo);

router.get('/edita-platillo/:id', editaPlatillo);
router.post('/edita-platillo/:id', editaPlatilloPost);
router.post('/elimina-platillo', eliminaPlatillo);

router.get('/cerrar-sesion', logout);
router.get('/acceso-denegado', denegado);
export default router;