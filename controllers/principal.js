import { ItemOrden, Menu } from '../models/asociaciones.js';
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
        res.redirect('/menu-general')
    } catch (error) {
        console.error('Error al buscar el platillo:', error);
        res.redirect('/menu-general'); // Redirige en caso de error
    }
}

const vistaCarrito = async (req, res) => {
    const token = req.session.userId;
    const items = await ItemOrden.findAll({
        where: { token },
        include: [{ model: Menu, attributes: ['nombre'] }]
    });
    res.render('invitado/carrito', { items, pagina: 'Mi carrito' })
}

const eliminarItem = async (req, res) => {
    const { id } = req.body;

    try {
        const item = await ItemOrden.findByPk(id);

        if (!item) {
            return res.redirect('/carrito');
        }
        console.log("el id es",id);
        await item.destroy();

        res.redirect('/carrito');

    } catch (error) {
        console.error('Error al eliminar el ítem:', error);
        return res.redirect('/carrito');
    }
};


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
    eliminarItem
}