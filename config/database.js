import Sequelize from 'sequelize';

// Configuración de la base de datos SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'puntoVentaDb.sqlite' // Nombre del archivo SQLite
});

// Probar la conexión
sequelize.authenticate()
    .then(() => console.log('Conexión a SQLite establecida correctamente.'))
    .catch(err => console.error('Error al conectar con SQLite:', err));

export default sequelize; 
