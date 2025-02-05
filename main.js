import express from 'express';
import cookieParser from 'cookie-parser';
import routerPrincipal from './routes/rutasMain.js'

const app = express();

//habilitar lectura de datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views', './views');
//carpeta de archivos estaticos
app.use(express.static('public'));

app.use('/', routerPrincipal);
const port = 5000;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})