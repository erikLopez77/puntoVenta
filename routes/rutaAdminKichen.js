import express from "express";
import {
    login, loginPost, ordenPendiente, confirmarOrden, historial, historial2,
    crudMenu, creaPlatillo, postPlatillo, editaPlatillo, editaPlatilloPost, eliminaPlatillo, buscarPlato,
    eliminarOrden, eliminarOrden2, logout, denegado
} from "../controllers/ContAdminKitchen.js";
import { verificarAdmin } from "../middleware/midAdmin.js";
import { verificarCocinero } from "../middleware/kitchenMid.js";

const router = express.Router();

router.get('/iniciar-sesion', login);
router.post('/iniciar-sesion', loginPost);
//cocineros
router.get('/ordenes-pendientes', verificarCocinero, ordenPendiente);
router.post('/ordenes-pendientes', verificarCocinero, confirmarOrden);

router.get('/ordenes-confirmadas', verificarCocinero, historial);
router.post('/ordenes-confirmadas', verificarCocinero, eliminarOrden2);

//admin
router.get('/vista-menu', verificarAdmin, crudMenu);
router.get('/crear-platillo', verificarAdmin, creaPlatillo);
router.post('/crear-platillo', verificarAdmin, postPlatillo);

router.get('/edita-platillo/:id', verificarAdmin, editaPlatillo);
router.post('/edita-platillo/:id', verificarAdmin, editaPlatilloPost);
router.post('/elimina-platillo', verificarAdmin, eliminaPlatillo);

router.get('/buscar', verificarAdmin, buscarPlato);
router.get('/ordenes-confirmadas-cocina', verificarAdmin, historial2);
router.post('/ordenes-confirmadas-cocina', eliminarOrden);

router.get('/cerrar-sesion', logout);
router.get('/acceso-denegado', denegado);
export default router;