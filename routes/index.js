const express = require('express');
const database = require('../database');
const router = express.Router();

router.get('/', function (req, res) {
    database.getAllPokemon((results) => {
        res.render('pokedex', {pokemons: results, limit: (req.query.limit || 20)});
    });
});

router.get('/api/', function (req, res) {
    const { limit = 20, skip = 0 } = req.query;
    database.getPokemons({ limit, skip }, (results) => {
        res.send({ pokemons: results, limit, skip });
    });
});


router.get('/:pokemon', function (req, res) {
    database.getPokemon(req.params.pokemon, (result) => {
        res.render('pokemon', {pokemon: result});
    });
});

router.get('/api/:pokemon', function (req, res) {
    database.getPokemon(req.params.pokemon, (result) => {
        res.send({ pokemon: result });
    });
});


module.exports = router;
