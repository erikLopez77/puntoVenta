import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Orden = sequelize.define('orden', {
    status: {//se inicia por defecto en false que quiere decir que no se ha entregado
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }, propietario: {//quien hace el pedido
        type: DataTypes.TEXT,
        allowNull: false
    }, total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }, noMesa: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, creado: {
        type: DataTypes.STRING, // Campo personalizado para la fecha
        allowNull: false,
    },
    entregado: {
        type: DataTypes.STRING, // Campo para la fecha de entrega en formato string
        allowNull: true, // Puede ser nulo si la orden no ha sido entregada
    }
}, {
    timestamps: false,
    freezeTableName: true    // No pluraliza el nombre de la tabla
});

Orden.prototype.actualizarStatus = async function () {
    const items = await this.getItemOrdens();
    const entregados = items.every((item) => item.entregado);
    if (entregados) {
        await this.update({ status: true });
    }
}

export default Orden;