import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http'; //modulo http
import { Server } from 'socket.io'; //server de socket.io p/ tiempo real
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import session from 'express-session';
import routerPrincipal from './routes/rutaWaiterInv.js';
import routerUsuario from './routes/rutaAdminKichen.js';

// Obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
export const io = new Server(server);//instancia de socket.io


app.use(express.json()); // Para analizar el cuerpo de las solicitudes como JSON
//habilitar lectura de datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());//middleware p/analizar cookies en node (seguro y facil)
// Configuración de sesión (requerida para csurf)
app.use(session({
  secret: 'pebelsito123',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Cambia a true si usas HTTPS
}))

// Middleware CSRF (configuración con cookies)
const csrfProtection = csrf({
  cookie: true,
  value: (req) => {
    return req.headers['x-csrf-token'] || req.body._csrf; //se lee desde header o body
  }
});
app.use(csrfProtection); // Aplica a todas las rutas

// Pasar el token CSRF a todas las vistas
app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken(); // Disponible en plantillas como "csrfToken"
  next();
});

app.set('view engine', 'pug');
app.set('views', './views');
//carpeta de archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routerPrincipal);
app.use('/usuario', routerUsuario);


// servidor escucha nuevas conexiones de clientes (registros con socket.id) 
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado:', socket.id);

  // server escucha eventos personalizados desde cualquier cliente
  socket.on('nueva-orden', (orden) => {
    console.log('Nueva orden recibida:', orden);

    // Emitir la nueva orden a todos los clientes conectados
    io.emit('actualizar-ordenes', orden);
  });

  // Manejar la desconexión del cliente
  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado:', socket.id);
  });
});

const port = 5000;

server.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`)
})