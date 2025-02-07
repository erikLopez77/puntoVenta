import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Categoria= sequelize.define('categoria',{
    nombre:{
        type: DataTypes.TEXT,
        allowNull:false
    }
},{
    timestamps:false
});

export default Categoria;