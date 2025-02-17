import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Menu = sequelize.define('menu', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
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
    timestamps: false, // No agrega createdAt y updatedAt automáticamente
    freezeTableName: true    // No pluraliza el nombre de la tabla
});

export default Menu;
