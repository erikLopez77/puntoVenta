import { Menu } from '../models/asociaciones.js';
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

export {
    nosotros,
    menu,
    desayunos,
    sopas,
    platoFuerte,
    postres,
    bebidas
}