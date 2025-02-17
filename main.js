import express from 'express';
import session from 'express-session'; // Importa express-session
import cookieParser from 'cookie-parser';
import routerPrincipal from './routes/rutasMain.js'
import { generarId } from './helpers/token.js';

const app = express();

// Configuración de sesiones
app.use(session({
    secret: 'mi_secreto', // Clave secreta para firmar la sesión
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Cambia a true si usas HTTPS
  }));

  // Middleware para asignar un ID único al usuario
  app.use((req, res, next) => {
    if (!req.session.userId) {
      req.session.userId = generarId(); // Asigna un UUID único al usuario
    }
    next();
  });

//habilitar lectura de datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());//middleware p/analizar cookies en node (seguro y facil)

app.set('view engine', 'pug');
app.set('views', './views');
//carpeta de archivos estaticos
app.use(express.static('public'));

app.use('/', routerPrincipal);
const port = 5000;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})