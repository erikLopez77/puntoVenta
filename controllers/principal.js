import { ItemOrden, Menu } from '../models/asociaciones.js';
const nosotros = (req, res) => {
    res.render('invitado/nosotros');
}

const menu = async (req, res) => {
    const bebidas = await Menu.findAll({ where: { categoriaId: 1 } });
    const desayunos = await Menu.findAll({ where: { categoriaId: 2 } });
    const sopas = await Menu.findAll({ where: { categoriaId: 3 } });
    const platoFuerte = await Menu.findAll({ where: { categoriaId: 4 } });
    const postres = await Menu.findAll({ where: { categoriaId: 5 } });

    res.render('invitado/menu', { bebidas, desayunos, sopas, platoFuerte, postres, pagina: 'Menu general' });
};

const ordenarMenu = async (req, res) => {
    const { id } = req.body;
    // Validación básica del ID
    if (!id || isNaN(id)) {
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

    // Validación básica del ID
    if (!id || isNaN(id)) {
        return res.redirect('/menu-general'); // Redirige si el ID no es válido
    }

    try {
        // Busca el platillo por su ID
        const platillo = await Menu.findByPk(id); // findByPk espera directamente el valor, no un objeto

        // Si no se encuentra el platillo, redirige al menú general
        if (!platillo) {
            return res.redirect('/menu-general');
        }

        // Renderiza la plantilla con los datos del platillo
        res.render('invitado/ordenar', { platillo });
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
        const total = cantidad * platillo.precio;
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
    console.log(token, 'Tokeen');
    const items = await ItemOrden.findAll({
        where: { token },
        include: [{ model: Menu, attributes: ['nombre'] }]
    });
    console.log(JSON.stringify(items, null, 2));

    res.render('invitado/carrito', { items })
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
    vistaCarrito
}