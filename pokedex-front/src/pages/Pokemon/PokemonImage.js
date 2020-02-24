import React from 'react';

const getPokeImageUrl = (pokemon) => {
    const imageName = `000${pokemon.pokemon_id}`.slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageName}.png`;
};

export const PokemonImage = ({ pokemon }) => <div class="pokeimage-container">
    <img class="pokeimage" src={getPokeImageUrl(pokemon)} alt={pokemon.name} />
</div>;
