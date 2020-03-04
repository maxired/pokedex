import React from 'react';

export const PokemonTitle = ({ pokemon }) => <h1 className="pokename">{pokemon.name} <span className="pokeid">{pokemon.pokemon_id}</span></h1>;
