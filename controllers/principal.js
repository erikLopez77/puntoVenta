
const nosotros = (req, res) => {
    res.render('invitado/nosotros');
}

const menu = (req, res) => {
    res.render('invitado/menu');
}

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