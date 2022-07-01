const boom = require('@hapi/boom');
// middleware de forma dinámica
function validatorHandler(schema, property) {
  return (req, res, next) => {
    // delvuelve el error como una propiedad
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
