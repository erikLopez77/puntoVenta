import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';
export const identificaUsuario = async (req, res, next) => {
    const token = req.cookies._token;
    if (!token) {
        return res.redirect('/usuario/iniciar-sesion');
    }
    try {
        const decoded = jwt.verify(token, 'TobitoSecret');
        const usuario = await Usuario.scope('eliminarPassword').findByPk(decoded.id);
        req.usuario = usuario;
        next();

    } catch (error) {
        return res.redirect('/usuario/iniciar-sesion')
    }
}