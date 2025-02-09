const validarHora = (req, res, next) =>{
    const hora = req.horaActual.split(":")[0];
    if ( hora >= 12 && hora <= 24){
        next();
    }
    else {
        return res.redirect('/?mensage=' + 'No estamos dentro del horario');
    }
};

module.exports = validarHora;
