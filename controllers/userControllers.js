import { check, validationResult } from "express-validator";
import Usuario from "../models/Usuario.js";
import { Orden, ItemOrden, Menu } from '../models/asociaciones.js'
import { generarJWT } from '../helpers/token.js';

const login = (req, res) => {
    res.render('usuario/login', { pagina: 'Iniciar sesión' });
}
const loginPost = async (req, res) => {
    await check('nombre').notEmpty().withMessage('El nombre de usuario es obligatorio').run(req);
    await check('password').notEmpty().withMessage('La contraseña es obligatoria').run(req);

    let errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.render('usuario/login', { errores: errores.errors, pagina: 'Iniciar sesión' })
    }
    const { nombre, password } = req.body;
    const usuario = await Usuario.findOne({ where: { nombre } });

    if (!usuario) {
        return res.render('usuario/login', {
            pagina: 'Iniciar sesión',
            errores: [{ msg: 'Error, no se ha encontrado al usuario' }]
        });
    }

    if (!usuario.verificarPassword(password)) {
        return res.render('usuario/login', {
            pagina: 'Iniciar sesión',
            nombre,
            errores: { error: { msg: 'Error, contraseña incorrecta' } }
        });
    }

    const token = generarJWT({ id: usuario.id, nombre: usuario.nombre });
    return res.cookie('_token', token, {
        httOnly: true, //no se puede acceder al token por alguna fuente externa
    }).redirect('/usuario/ordenes-pendientes');
}

const ordenPendiente = async (req, res) => {
    //cargar vista de las ordenes
    const ordenes = await Orden.findAll({
        where: { status: false },//orden no preparada
        include: [{
            model: ItemOrden,
            where: { entregado: false }, // Solo ítems no confirmados
            include: [{
                model: Menu,//incluir info de platillo
                attributes: ['nombre']//solo el nombre del platillo
            }],
            attributes: ['id', 'cantidad', 'subtotal', 'total', 'indicacionExtra']//campo itemOrden
        }],
        order: [['creado', 'ASC']]//mas antiguas primero
    });
    res.render('usuario/ordenes', { pagina: 'Ordenes', ordenes })
}

const confirmarOrden = async (req, res) => {
    const { id } = req.body;
    try {
        // Busca el ítem por su ID
        const item = await ItemOrden.findByPk(id);

        if (!item) {
            return res.status(404).json({ error: 'Ítem no encontrado' });
        }
        const fechaActual = new Date().toLocaleString('es-MX', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });

        // Marca el ítem como entregado
        await item.update({ entregado: true });

        const orden = await Orden.findByPk(item.ordenId);
        orden.entregado = new Date().toLocaleString('es-MX', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        await orden.save();
        await orden.actualizarStatus();
        // Redirige de vuelta a la página de órdenes
        res.redirect(req.originalUrl);

    } catch (error) {
        console.error('Error al confirmar el ítem:', error);
        res.status(500).json({ error: 'Error al confirmar el ítem' });
    }
}
const historial = async (req, res) => {
    const ordenes = await Orden.findAll({
        where: { status: true },//orden no preparada
        include: [{
            model: ItemOrden,
            where: { entregado: true }, // Solo ítems confirmados
            include: [{
                model: Menu,//incluir info de platillo
                attributes: ['nombre']//solo el nombre del platillo
            }],
            attributes: ['id', 'cantidad', 'subtotal', 'total', 'indicacionExtra']//campo itemOrden
        }],
        order: [['id', 'DESC']]
    });
    res.render('usuario/historial', { pagina: 'Historial', ordenes })
}
const logout = (req, res) => {
    // Eliminar la cookie "_token"
    res.clearCookie('_token');
    // Redirigir al usuario a la página de inicio de sesión o a la página principal
    return res.redirect('/usuario/iniciar-sesion');
}
export {
    login,
    loginPost,
    ordenPendiente,
    confirmarOrden,
    historial,
    logout
}