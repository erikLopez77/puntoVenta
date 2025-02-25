import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';
export const verificarAutorizacion = async (req, res, next) => {
    const token = req.cookies._token;
    if (!token) {
        return res.redirect('/usuario/iniciar-sesion');
    }
    try {
        const decoded = jwt.verify(token, 'TobitoSecret');
        const usuario = await Usuario.scope('eliminarPassword').findByPk(decoded.id);
        if (usuario.id==1) {
            req.usuario = usuario;
        } else if(usuario.id>1){

        }else {
            return res.redirect('/usuario/iniciar-sesion');
        }
        next();
    } catch (error) {
        return res.redirect('/usuario/iniciar-sesion')
    }
}