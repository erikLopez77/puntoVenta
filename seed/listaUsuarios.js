import bcrypt from 'bcrypt';

const listaUsuarios=[{
    nombre:'Alicia Cordoba',
    password: bcrypt.hashSync('rolDeCanela123',10)
},{
    nombre:'Usuario de Prueba',
    password:bcrypt.hashSync('123456789',10)
}]

export default listaUsuarios;