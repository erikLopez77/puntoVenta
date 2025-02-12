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

    res.render('invitado/menu', { bebidas, desayunos, sopas, platoFuerte, postres });
};


const desayunos = (req, res) => {
    res.render('invitado/desayunos');
}
const sopas = (req, res) => {
    res.render('invitado/sopas');
}
const platoFuerte = (req, res) => {
    res.render('invitado/plato-fuerte');
}
const postres = (req, res) => {
    res.render('invitado/postres');
}
const bebidas = (req, res) => {
    res.render('invitado/bebidas');
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