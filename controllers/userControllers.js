import { check, validationResult } from "express-validator";
import Usuario from "../models/Usuario.js";
import {Orden, ItemOrden} from '../models/asociaciones.js'
import { where } from "sequelize";
const login = (req,res) =>{
    res.render('usuario/login',{pagina: 'Iniciar sesión'});
}
const loginPost =async (req,res)=>{
    await check('nombre').notEmpty().withMessage('El nombre de usuario es obligatorio').run(req);
    await check('password').notEmpty().withMessage('La contraseña es obligatoria').run(req);

    let errores=validationResult(req);
    console.log('Errores',errores.errors)
    if(!errores.isEmpty()){
        return res.render('usuario/login',{errores:errores.errors, pagina:'Iniciar sesión'})
    }
    const {nombre, password}=req.body;
    const usuario=await Usuario.findOne({where:{nombre}});

    if(!usuario){
        return res.render('usuario/login',{
            pagina:'Iniciar sesión',
            errores:{msg:'Error, no se ha encontrado al usuario'}
        });
    }

    if(!usuario.verificarPassword(password)){
        return res.render('usuario/login',{
            pagina:'Iniciar sesión',
            errores:{msg:'Error, contraseña incorrecta'}
        });
    }
}

const ordenPendiente = async (req,res)=>{
    const ordenes = await Orden.findAll({where:{status:false}});

    console.log(ordenes);
}
export {
    login,
    loginPost,
    ordenPendiente
}