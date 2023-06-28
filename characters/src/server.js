const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/characters", require("./routes"));

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});

server.use((err, req, res, next) => {
  //Este es el manejador de errores
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
