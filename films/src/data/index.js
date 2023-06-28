const films = require("./films.json");

module.exports = {
  list: async () => {
    return films;
  },

  create: async () => {
    throw Error("Hubo un error al momento de crear el film.");
  },
};
