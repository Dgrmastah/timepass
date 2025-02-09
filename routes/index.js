const express =require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const mensage = req.query.mensage ||'hola' ;
    res.send(
        `<h1>Hola</h1>
        <h1>${mensage}</h1>
        <h2>Hora actual:${req.horaActual}</h2>
        <a href = '/endroute'><button>Ir a la endroute</button></a>`
    )}
);






module.exports = router;