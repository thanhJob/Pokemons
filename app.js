const express = require("express");
const morgan = require("morgan");
// Import router
const pokemonRouter = require("./src/api/routers/pokemon.router");

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/pokemons", pokemonRouter);
const port = 3000;
app.listen(port, () => {
  console.log(`App listen running at port : ${port}`);
});
