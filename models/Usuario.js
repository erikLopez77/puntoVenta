import { DataTypes } from 'sequelize';
import  bcrypt from 'bcrypt';
import sequelize from '../config/database.js';


const Usuario=sequelize.define('usuario',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },password:{
        type: DataTypes.STRING,
        alllowNull: false
    },
},{
    timestamps:false,
    hooks:{
         beforeCreate: async function (usuario) {
            const salt = await bcrypt.genSalt(10);
            usuario.password = await bcrypt.hash(usuario.password, salt);
        }
    },scopes: {
        eliminarPassword:{
            attributes:{
                exclude: ['password']
            }
        }
    }
});

//funcion para comparar contraseña del prototipo de la tabla Usuario
//pasword es el texto plano y this.password la contraseña encriptada
Usuario.prototype.verificarPassword= function (password){
    return bcrypt.compareSync(password,this.password)
}

export default Usuario;