import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';
export const verificarCocinero = async (req, res, next) => {
    const token = req.cookies._token;
    if (!token) {
        return res.redirect('/usuario/iniciar-sesion');
    }
    try {
        const decoded = jwt.verify(token, 'TobitoSecret');
        const usuario = await Usuario.scope('eliminarPassword').findByPk(decoded.id);
        if (usuario.id > 1) {
            req.usuario = usuario;
            next();
        } else {
            return res.redirect('/usuario/acceso-denegado');
        }
    } catch (error) {
        return res.redirect('/usuario/iniciar-sesion')
    }
}