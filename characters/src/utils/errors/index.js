class ClientError extends Error {
  //Nueva Clase definida para enviar mensajes personalizados
  constructor(message, statusCode = 400) {
    super(message);
    statusCode = statusCode;
  }
}

module.exports = { ClientError };
