import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ItemOrden=sequelize.define('itemOrden',{
    cantidad:{
        type:DataTypes.INTEGER,
        allowNull:false
    },subtotal:{
        type:DataTypes.FLOAT,
        allowNull:false
    },total:{
        type:DataTypes.FLOAT,
        allowNull:false
    },indicacionExtra:{
        type:DataTypes.TEXT,
        allowNull: true
    },token:{
        type:DataTypes.STRING
    }
},{
    timestamps:false //no registra fecha y hora de creacion y actualizacion
});

export default ItemOrden;