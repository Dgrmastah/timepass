const horaMiddleware = (req, res, next) => {
    const fecha = new Date();
    let minutos = fecha.getMinutes();
    let horas = fecha.getHours();
    req.horaActual = `${horas}:${minutos}`;
    next();
};

module.exports = horaMiddleware;