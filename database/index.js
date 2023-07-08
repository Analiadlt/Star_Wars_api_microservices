const server = require("./src/server");
const { PORT } = require("./src/config/envs");

// const { Character, Film, Planet } = require("./src/database");

// Planet.list().then((res) => console.log(res[0]));
// Character.get(200).then((res) => console.log(res));
// Planet.insert({
//   _id: "205",
//   name: "planet example 205",
//   gravity: "zero",
// });

// Planet.get(203).then((res) => console.log(res));
// Character.find()
//   .populate("homeworld", ["_id", "name"])
//   .populate("films", ["_id", "title"])
//   .then((res) => console.log(res[1]));

server.listen(PORT, () => {
  console.log(`Database service on port ${PORT}`);
});
