const express = require ('express');
const app = express ();
const indexRouter = require ('./routes/index');
const horaMiddleware = require ('./middlewares/horaMiddleware');
const endrouteRouter = require ('./routes/endroute');
const validarHora = require('./middlewares/validarHora');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(horaMiddleware);
app.use('/', indexRouter);
app.use('/endroute', validarHora, endrouteRouter);


const port = 3000 ;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
