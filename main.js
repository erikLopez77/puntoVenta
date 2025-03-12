import express from 'express';
import http from 'http'; //modulo http
import { Server } from 'socket.io'; //server de socket.io p/ tiempo real
import cookieParser from 'cookie-parser';
import routerPrincipal from './routes/rutasMain.js';
import routerUsuario from './routes/rutaUsuario.js';

const app = express();
const server = http.createServer(app);//server http usando app ed express
export const io = new Server(server);//instancia de socket.io


app.use(express.json()); // Para analizar el cuerpo de las solicitudes como JSON
//habilitar lectura de datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());//middleware p/analizar cookies en node (seguro y facil)

app.set('view engine', 'pug');
app.set('views', './views');
//carpeta de archivos estaticos
app.use(express.static('public'));

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