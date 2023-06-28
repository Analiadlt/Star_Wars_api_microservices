const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const newPlanet = await Planet.create();
  response(res, 201, newPlanet);
};
