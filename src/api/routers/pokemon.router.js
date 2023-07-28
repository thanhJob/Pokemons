const express = require("express");
// controllers
const pokemonController = require("../controller/pokemon.controller");

const router = express.Router();
// Search
router.route("/search").get(pokemonController.getItemsBySearchName);

// Params
router.route("/:id").get(pokemonController.getItemsById);

router.route("/").get(pokemonController.getAlls);

module.exports = router;
