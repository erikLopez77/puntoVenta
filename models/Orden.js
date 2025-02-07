import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Orden = sequelize.define('orden',{
    status:{//se inicia por defecto en false que quiere decir que no se ha entregado
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },propietario:{//quien hace el pedido
        type:DataTypes.TEXT,
        allowNull:false
    },total:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
},{
    timestamps:true //registra fecha y hora de creacion y actualizacion
});

export default Orden;