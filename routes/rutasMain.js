import express from "express";
import {
    nosotros, menu, desayunos, sopas, platoFuerte, postres, bebidas,
    ordenarMenu, ordenar,ordenarItem, vistaCarrito
} from "../controllers/principal.js";

const router = express.Router();

router.get('/nosotros', nosotros);

router.get('/menu-general', menu);
router.post('/menu-general', ordenarMenu)

router.get('/desayunos', desayunos);
router.get('/sopas-pastas', sopas);
router.get('/plato-fuerte', platoFuerte);
router.get('/postres', postres);
router.get('/bebidas', bebidas);

router.get('/ordenar-pedido/:id', ordenar);
router.post('/ordenar-pedido/:id',ordenarItem);

router.get('/carrito',vistaCarrito);


export default router;