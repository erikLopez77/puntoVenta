import { exit } from 'node:process';
import { Categoria, Menu } from "../models/asociaciones.js";
import Usuario from '../models/Usuario.js';
import categoriasPlatillos from './categoriasPlatillos.js';
import listaUsuarios from './listaUsuarios.js';
import menuItems from './menuItems.js';
import sequelize from '../config/database.js';

const importarSemilla = async () => {
    try {
        //crear tablas en la db en caso de no tenerlas
        await sequelize.sync();
        //insertamos los datos
        await Categoria.bulkCreate(categoriasPlatillos)
        await Promise.all([
            Usuario.bulkCreate(listaUsuarios),
            Menu.bulkCreate(menuItems)
        ]);
        console.log('Datos importados con éxito');
        exit();

    } catch (error) {
        console.log(error);
        exit(1); //todo finalizo pero con un error
    }
}

const eliminarDatos = async () => {
    try {//eliminamos las tablas
        await sequelize.sync({ force: true });
        console.log("Datos eliminados correctamente");
        exit(0);
    } catch (error) {
        console.log(error);
        exit(1);
    }
}

if (process.argv[2] === "-i") {
    importarSemilla();
}

if (process.argv[2] === "-e") {
    eliminarDatos();
}




