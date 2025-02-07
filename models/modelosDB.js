import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Menu = sequelize.define('Menu', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false // No agrega createdAt y updatedAt automáticamente
});

const Orden = sequelize.define('Orden',)
export { Menu }
