import { check, validationResult } from "express-validator";
import Usuario from "../models/Usuario.js";
import { Orden, ItemOrden, Menu } from '../models/asociaciones.js'
import { generarJWT } from '../helpers/token.js';

const login = (req, res) => {
    res.render('usuario/login', { pagina: 'Iniciar sesión' });
}
const loginPost = async (req, res) => {
    await check('nombreUsuario').notEmpty().withMessage('El nombre de usuario es obligatorio').run(req);
    await check('password').notEmpty().withMessage('La contraseña es obligatoria').run(req);

    let errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.render('usuario/login', { errores: errores.errors, pagina: 'Iniciar sesión' })
    }
    const { nombreUsuario, password } = req.body;
    const usuario = await Usuario.findOne({ where: { nombreUsuario } });

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

    const token = generarJWT({ id: usuario.id, nombre: usuario.nombre, rol: usuario.rol });
    if (usuario.id == 1) {
        return res.cookie('_token', token, {
            httOnly: true, //no se puede acceder al token por alguna fuente externa
        }).redirect('/usuario/vista-menu');
    } else if (usuario.rol == "Cocinero") {
        return res.cookie('_token', token, {
            httOnly: true, //no se puede acceder al token por alguna fuente externa
        }).redirect('/usuario/ordenes-pendientes');
    } else if (usuario.rol == "Mesero") {
        return res.cookie('_token', token, {
            httOnly: true, //no se puede acceder al token por alguna fuente externa
        }).redirect('/menu-general');
    }
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
            return res.status(404).json({ error: 'Platillo no encontrado' });
        }
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
        console.error('Error al confirmar el platillo:', error);
        res.status(500).json({ error: 'Error al confirmar el platillo' });
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
                as: 'menu',
                attributes: ['nombre'],//solo el nombre del platillo
                required: true
            }],
            attributes: ['id', 'cantidad', 'subtotal', 'total', 'indicacionExtra']//campo itemOrden
        }],
        order: [['id', 'DESC']]
    });
    //res.json(ordenes);
    res.render('usuario/historial', { pagina: 'Historial', ordenes })
}
const crudMenu = async (req, res) => {
    const bebidas = await Menu.findAll({ where: { categoriaId: 1 } });
    const desayunos = await Menu.findAll({ where: { categoriaId: 2 } });
    const sopas = await Menu.findAll({ where: { categoriaId: 3 } });
    const platoFuerte = await Menu.findAll({ where: { categoriaId: 4 } });
    const postres = await Menu.findAll({ where: { categoriaId: 5 } });

    res.render('admin/vistaMenu', { pagina: 'Vista del menu', bebidas, desayunos, sopas, platoFuerte, postres })

}
const creaPlatillo = (req, res) => {
    const datos = '';
    res.render('admin/crearPlatillo', { datos, pagina: 'Crear platillo' });
}

const postPlatillo = async (req, res) => {
    const { nombre, descripcion, precio, categoriaId } = req.body;
    const platillo = await Menu.create({ nombre, descripcion, precio, categoriaId });
    if (!platillo) {
        return res.status(500).json({ success: false, message: 'Error no se pudo crear al objeto' });
    }
    res.status(200).json({ success: true, message: 'La creación se realizó con éxito' })
}
const editaPlatillo = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const datos = await Menu.findByPk(id);
    if (!id) {
        return res.redirect('/usuario/vista-menu');
    }
    res.render('admin/editaPlatillo', { datos, pagina: 'Editar platillo' });
}
const editaPlatilloPost = async (req, res) => {
    const { id, nombre, descripcion, precio, categoriaId } = req.body;
    try {
        const platillo = await Menu.findByPk(id);
        await platillo.update({ nombre, descripcion, precio, categoriaId });
        res.status(200).json({ success: true, message: 'Se ha actualizado el platillo' });
    } catch (error) {
        console.log('Error al actualizar:', error);
        res.status(500).json({ success: false, message: 'Error al actualizar al platillo' })
    }
}
const eliminaPlatillo = async (req, res) => {
    const { id } = req.body;
    try {
        const platillo = await Menu.findByPk(id);
        if (!platillo) {
            return res.status(404).json({ success: false, message: 'No se encuentra el platillo' })
        }
        await platillo.destroy();
        res.status(200).json({ success: true, message: 'Platillo eliminado con éxito' });

    } catch (error) {
        console.error('Error al eliminar el platillo:', error);
        res.status(500).json({ success: false, message: 'Hubo un error en la base de datos' });
    }
}
const logout = (req, res) => {
    // Eliminar la cookie "_token"
    res.clearCookie('_token');
    // Redirigir al usuario a la página de inicio de sesión o a la página principal
    return res.redirect('/usuario/iniciar-sesion');
}
const denegado = (req, res) => {
    res.render('usuario/acceso-denegado', { pagina: 'Acceso denegado' });
}
export {
    login,
    loginPost,
    ordenPendiente,
    confirmarOrden,
    historial,
    crudMenu,
    creaPlatillo,
    postPlatillo,
    editaPlatillo,
    editaPlatilloPost,
    eliminaPlatillo,
    logout,
    denegado
}