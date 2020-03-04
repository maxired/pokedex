const express = require('express');
const database = require('../database');
const router = express.Router();

router.get('/', function (req, res) {
    database.getAllPokemon((results) => {
        res.render('pokedex', {pokemons: results, limit: (req.query.limit || 20)});
    });
});


router.get('/:pokemon', function (req, res) {
    database.getPokemon(req.params.pokemon, (result) => {
        res.render('pokemon', {pokemon: result});
    });
});


router .get ('/api/pokemon',function(req,res){
    database.getAllPokemon((results)=>{
        res.send({pokemon:results})

    });
});

router.get('/api/pokemon/:pokemon', function (req, res) {
    database.getPokemon(req.params.pokemon, (result) => {
        res.send({pokemon:result})
    });
});


module.exports = router;
