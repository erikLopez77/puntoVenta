import Categoria from './Categoria.js';
import ItemOrden from './ItemOrden.js';
import Menu from './Menu.js';
import Orden from './Orden.js';

// Asociación entre Categoría y Menu
Menu.belongsTo(Categoria, { foreignKey: 'categoriaId' });
Categoria.hasMany(Menu, { foreignKey: 'categoriaId' });

// Asociación entre ItemOrden y Menu
ItemOrden.belongsTo(Menu, { foreignKey: 'platilloId' });
Menu.hasMany(ItemOrden, { foreignKey: 'platilloId' });

// Asociación entre Orden e ItemOrden
Orden.hasMany(ItemOrden, { foreignKey: 'ordenId' });
ItemOrden.belongsTo(Orden, { foreignKey: 'ordenId' });

export{
    Categoria,
    ItemOrden,
    Menu,
    Orden
}


