const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(require("./getPlanets")),
  createPlanet: catchedAsync(require("./createPlanet")),
};
