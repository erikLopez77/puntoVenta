import { validationResult } from 'express-validator';
import { ItemOrden, Menu, Orden } from '../models/asociaciones.js';
import sequelize from '../config/database.js';
const nosotros = (req, res) => {
    res.render('invitado/nosotros', { pagina: 'Nostros' });
}

const menu = async (req, res) => {
    const bebidas = await Menu.findAll({ where: { categoriaId: 1 } });
    const desayunos = await Menu.findAll({ where: { categoriaId: 2 } });
    const sopas = await Menu.findAll({ where: { categoriaId: 3 } });
    const platoFuerte = await Menu.findAll({ where: { categoriaId: 4 } });
    const postres = await Menu.findAll({ where: { categoriaId: 5 } });

    res.render('invitado/menu', { bebidas, desayunos, sopas, platoFuerte, postres, pagina: 'Menu general' });
};

const ordenarMenu = (req, res) => {
    const { id } = req.body;
    // Validación básica del ID
    if (!id) {
        return res.redirect('/menu-general');
    } // Redirige si el ID no es válido
    //validacion o poner a mi plantilla para que no tenga el cero
    res.redirect(`/ordenar-pedido/${id}`)
}


const desayunos = async (req, res) => {
    const desayunos = await Menu.findAll({ where: { categoriaId: 2 } });

    res.render('invitado/desayunos', { desayunos, pagina: 'Desayunos' });
}
const sopas = async (req, res) => {
    const sopas = await Menu.findAll({ where: { categoriaId: 3 } });

    res.render('invitado/sopas', { sopas, pagina: 'Sopas y pastas' });
}
const platoFuerte = async (req, res) => {
    const platosFuertes = await Menu.findAll({ where: { categoriaId: 4 } });

    res.render('invitado/plato-fuerte', { platosFuertes, pagina: 'Plato fuerte' });
}
const postres = async (req, res) => {
    const postres = await Menu.findAll({ where: { categoriaId: 5 } });

    res.render('invitado/postres', { postres, pagina: 'Postres' });
}
const bebidas = async (req, res) => {
    const bebidas = await Menu.findAll({ where: { categoriaId: 1 } });

    res.render('invitado/bebidas', { bebidas, pagina: 'Bebidas' });
}

const ordenar = async (req, res) => {
    const { id } = req.params;

    try {
        // Busca el platillo por su ID
        const platillo = await Menu.findByPk(id); // findByPk espera directamente el valor, no un objeto

        // Si no se encuentra el platillo, redirige al menú general
        if (!platillo) {
            return res.redirect('/menu-general');
        }

        // Renderiza la plantilla con los datos del platillo
        res.render('invitado/ordenar', { platillo, pagina: 'Ordenar' });
    } catch (error) {
        console.error('Error al buscar el platillo:', error);
        res.redirect('/menu-general'); // Redirige en caso de error
    }
}

const ordenarItem = async (req, res) => {
    const { id, indicaciones, cantidad } = req.body;

    try {
        // Busca el platillo por su ID
        const platillo = await Menu.findByPk(id); // findByPk espera directamente el valor, no un objeto

        // Si no se encuentra el platillo, redirige al menú general
        if (!platillo) {
            return res.redirect('/menu-general');
        }
        //capturamos el token de la sesion
        const token = req.session.userId;
        // Calculamos el total y lo limitamos a dos decimales
        const total = parseFloat((cantidad * platillo.precio).toFixed(2));
        await ItemOrden.create({ cantidad, subtotal: platillo.precio, total, indicacionExtra: indicaciones, token, platilloId: platillo.id });

        // Renderiza la plantilla con los datos del platillo
        res.redirect('/menu-general?success=true')
    } catch (error) {
        console.error('Error al buscar el platillo:', error);
        res.redirect('/menu-general'); // Redirige en caso de error
    }
}

const vistaCarrito = async (req, res) => {
    const token = req.session.userId;
    const items = await ItemOrden.findAll({
        where: { token, ordenId:null },
        include: [{ model: Menu, attributes: ['nombre'] }]
    });
    res.render('invitado/carrito', { items, pagina: 'Mi carrito' })
}

const eliminarItem = async (req, res) => {
    const { id } = req.body;

    try {
        const item = await ItemOrden.findByPk(id);

        if (!item) {
            return res.status(404).json({ success: false, message: 'Ítem no encontrado' });
        }
        await item.destroy();

        res.status(200).json({ success: true, message: 'Ítem eliminado correctamente' });

    } catch (error) {
        console.error('Error al eliminar el ítem:', error);
        res.status(500).json({ success: false, message: 'Error al eliminar el ítem' });  }
};

const mandarOrden = async (req, res) => {
    const transaction = await sequelize.transaction();// Inicia la transacción
    try {
        //validar que se manda con un propietario
        let resultado = validationResult(req);
        const token = req.session.userId;
        const items = await ItemOrden.findAll({
            where: { token },
            include: [{ model: Menu, attributes: ['nombre'] }]
        });
        if (!resultado.isEmpty()) {
            await transaction.rollback(); // Rollback si hay errores de validación
            return res.render('invitado/carrito', { items, pagina: 'Mi carrito', error: resultado.array() })
        }
        const { nombre } = req.body; // Array de IDs de platillos
        console.log('Platillos enviados a cocina:', items);
        var total = 0;

        items.forEach(item => {
            total += item.total;
        });
        console.log(total, '++++');
        // Aquí puedes procesar la orden (guardar en la base de datos, etc.)
        const orden = await Orden.create({ status: false, propietario: nombre, total }, { transaction })
        await Promise.all(
            items.map(item => {
                return item.update({ ordenId: orden.id }, { transaction })
            })
        );
        await transaction.commit(); // Finalizar la transacción con commit
        console.log('Orden creada con éxito:', orden.id);
        res.redirect('/carrito'); // Redirigir al carrito después de enviar la orden
    } catch (error) {
        await transaction.rollback();
        console.error('Error al mandar la orden:', error);
    }
}


export {
    nosotros,
    menu,
    ordenarMenu,
    desayunos,
    sopas,
    platoFuerte,
    postres,
    bebidas,
    ordenar,
    ordenarItem,
    vistaCarrito,
    eliminarItem,
    mandarOrden
}