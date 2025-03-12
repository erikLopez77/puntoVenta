import bcrypt from 'bcrypt';
import { generarId } from '../helpers/token.js';

const listaUsuarios = [{
    nombre: 'Alicia Cordoba',
    apellidos: 'Cordoba',
    nombreUsuario: 'AliciaCordoba',
    token: generarId(),
    password: bcrypt.hashSync('rolDeCanela123', 10)
}, {
    nombre: 'Erik',
    apellidos: 'Lopez',
    rol: 'Mesero',
    nombreUsuario: 'Usuario de Prueba1',
    token: generarId(),
    password: bcrypt.hashSync('123456789', 10)
}, {
    nombre: 'Erik',
    apellidos: 'Espinosa',
    rol: 'Cocinero',
    token: generarId(),
    nombreUsuario: 'Usuario de Prueba2',
    password: bcrypt.hashSync('123456789', 10)
}]

export default listaUsuarios;