import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import sequelize from '../config/database.js';

const Usuario = sequelize.define('usuario', {
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    }, apellidos: {
        type: DataTypes.STRING(35),
        allowNull: false
    }, rol: {
        type: DataTypes.STRING,
        allowNull: true
    }, nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    }, token: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        alllowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true,    // No pluraliza el nombre de la tabla
    hooks: {
        beforeCreate: async function (usuario) {
            const salt = await bcrypt.genSalt(10);
            usuario.password = await bcrypt.hash(usuario.password, salt);
        }
    }, scopes: {
        eliminarPassword: {
            attributes: {
                exclude: ['password']
            }
        }
    }
});

//funcion para comparar contraseña del prototipo de la tabla Usuario
//pasword es el texto plano y this.password la contraseña encriptada
Usuario.prototype.verificarPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

export default Usuario;