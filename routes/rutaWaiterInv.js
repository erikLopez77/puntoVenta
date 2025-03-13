import express from "express";
import { verificarMesero } from "../middleware/waiterMid.js";
import {
    nosotros, menu, desayunos, sopas, platoFuerte,
    postres, bebidas, ordenarMenu, ordenar, ordenarItem,
    vistaCarrito, eliminarItem, mandarOrden, mostrarRegistro,
    creaCuenta, mostrarRegistroRec, recuperaPaswword, buscar
} from "../controllers/ContWaiterInv.js";

const router = express.Router();
//rutas mesero
router.get('/menu-general', verificarMesero, menu);
router.post('/menu-general', ordenarMenu)

router.get('/desayunos', verificarMesero, desayunos);
router.post('/desayunos', ordenarMenu);

router.get('/sopas-pastas', verificarMesero, sopas);
router.post('/sopas-pastas', ordenarMenu);

router.get('/plato-fuerte', verificarMesero, platoFuerte);
router.post('/plato-fuerte', ordenarMenu);

router.get('/postres', verificarMesero, postres);
router.post('/postres', ordenarMenu);

router.get('/bebidas', verificarMesero, bebidas);
router.post('/bebidas', ordenarMenu);

router.get('/ordenar-pedido/:id', verificarMesero, ordenar);
router.post('/ordenar-pedido/:id', verificarMesero, ordenarItem);

router.get('/carrito', verificarMesero, vistaCarrito);//hacer una plantilla p/eliminar orden o con el post
router.post('/carrito/eliminar', eliminarItem);
router.post('/carrito/mandar-orden', verificarMesero, mandarOrden);

router.get('/buscar', buscar);
//SIN CUENTA
router.get('/registrate', mostrarRegistro);
router.post('/registrate', creaCuenta);

router.get('/recuperar-contrasena', mostrarRegistroRec);
router.post('/recuperar-contrasena', recuperaPaswword);

router.get('/nosotros', nosotros);

export default router;