import React from 'react';

export const PokemonTypeInfo = ({ pokemon }) => <div class="typeInfo">
    <div>Type</div>
    <div class={`type background-color-${pokemon.type1.toLowerCase()}`}>{pokemon.type1}</div>
    {pokemon.type2 && ' '}
    {pokemon.type2 && <div class={`type background-color-${pokemon.type2.toLowerCase()}`}>{pokemon.type2}</div>}
</div>;
