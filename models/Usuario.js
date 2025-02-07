import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Usuario=sequelize.define('usuario',{
    nombre:{
        type: DataTypes.INTEGER,
        allowNull: false
    },password:{
        type: DataTypes.STRING,
        alllowNull: false
    },
},{
    timestamps:false
});

export default Usuario;