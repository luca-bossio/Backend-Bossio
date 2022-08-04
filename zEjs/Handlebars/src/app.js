import express from 'express';
import usuariosRouter from './routes/usuarios.router.js';
import viewsRouter from './routes/views.router.js';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use('/api',usuariosRouter);
app.use('/',viewsRouter);

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname + '/views');
app.set('view engine','handlebars');