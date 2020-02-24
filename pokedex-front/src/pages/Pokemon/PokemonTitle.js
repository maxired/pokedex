import React from 'react';

export const PokemonTitle = ({ pokemon }) => <h1 class="pokename">{pokemon.name} <span class="pokeid">{pokemon.pokemon_id}</span></h1>;
