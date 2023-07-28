const fs = require("fs");
module.exports = pokemons = JSON.parse(
  fs.readFileSync(`${__dirname}/pokemon.json`)
);
