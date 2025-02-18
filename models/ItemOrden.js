import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ItemOrden = sequelize.define('itemOrden', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
    }, total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }, indicacionExtra: {
        type: DataTypes.TEXT,
        allowNull: true
    }, token: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false, //no registra fecha y hora de creacion y actualizacion
    freezeTableName: true    // No pluraliza el nombre de la tabla
});

export default ItemOrden;