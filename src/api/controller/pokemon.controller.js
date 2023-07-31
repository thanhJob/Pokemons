const express = require("express");
// pokemons
let pokemons = require("../../../data/exportPokemon");

exports.getAlls = (req, res, next) => {
  if (!pokemons) return next("Not found data!", 404);

  // method sort string
  pokemons = pokemons.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  res.status(200).json({
    pokemons,
  });
};

exports.getItemsById = (req, res, next) => {
  const id = req.params.id;
  const pokemon = pokemons.filter((result) => {
    return result.id == id;
  });
  if (!pokemon) return next("Not found data!", 404);
  res.status(200).json({
    pokemon,
  });
};

exports.getItemsBySearchName = (req, res, next) => {
  const name = req.query.name;
  const pokemon = pokemons.filter((result) => {
    return result.name.toLowerCase().indexOf(`${name}`.toLowerCase()) !== -1;
  });
  if (pokemon.length == 0) {
    res.render("error");
  }

  res.status(200).json({
    status: "Successfully!",
    pokemon,
  });
};
