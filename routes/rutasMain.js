import express from "express";
import { body } from "express-validator";
import {
    nosotros, menu, desayunos, sopas, platoFuerte,
    postres, bebidas,
    ordenarMenu, ordenar, ordenarItem, vistaCarrito, eliminarItem, mandarOrden
} from "../controllers/principal.js";

const router = express.Router();

router.get('/nosotros', nosotros);

router.get('/menu-general', menu);
router.post('/menu-general', ordenarMenu)

router.get('/desayunos', desayunos);
router.post('/desayunos', ordenarMenu);

router.get('/sopas-pastas', sopas);
router.post('/sopas-pastas', ordenarMenu);

router.get('/plato-fuerte', platoFuerte);
router.post('/plato-fuerte', ordenarMenu);

router.get('/postres', postres);
router.post('/postres', ordenarMenu);

router.get('/bebidas', bebidas);
router.post('/bebidas', ordenarMenu);

router.get('/ordenar-pedido/:id', ordenar);
router.post('/ordenar-pedido/:id', ordenarItem);

router.get('/carrito', vistaCarrito);//hacer una plantilla p/eliminar orden o con el post
router.post('/carrito/eliminar', eliminarItem);
router.post('/carrito/mandar-orden',
    body('nombre').notEmpty().withMessage('No se detectó un propietario de la orden'),
    mandarOrden)


export default router;