const characters = require("./characters.json");

module.exports = {
  list: async () => {
    return characters;
  },

  create: async () => {
    throw Error("Hubo un error al momento de crear el personaje");
  },
};
