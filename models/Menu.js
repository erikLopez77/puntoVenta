import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Menu = sequelize.define('menu', {
    nombre: {
        type: DataTypes.TEXT,
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

export default Menu;
