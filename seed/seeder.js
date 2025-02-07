import { exit } from 'node:process';
import {Categoria,Menu} from "../models/asociaciones.js";
import Usuario from '../models/Usuario.js';
import categoriasPlatillos from './categoriasPlatillos.js';
import listaUsuarios from './listaUsuarios.js';
import menuItems from './menuItems.js';
import { sequelize } from '../config/database.js';

const importarSemilla = async ()=>{
    try {
        await sequelize.sync();
        await Categoria.bulkCreate(categoriasPlatillos)
        await Promise.all([
            Usuario.bulkCreate(listaUsuarios),
            Menu.bulkCreate(menuItems)
        ]);
    } catch (error) {
        console.log(error);
        exit(1); //todo finalizo pero con un error
    }

}

if (process.argv[2] === "-i") {
    importarDatos();
}




