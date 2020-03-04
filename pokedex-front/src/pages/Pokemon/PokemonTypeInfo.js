import React from 'react';

export const PokemonTypeInfo = ({ pokemon }) => <div className="className">
    <div>Type</div>
    <div className={`type background-color-${pokemon.type1.toLowerCase()}`}>{pokemon.type1}</div>
    {pokemon.type2 && ' '}
    {pokemon.type2 && <div className={`type background-color-${pokemon.type2.toLowerCase()}`}>{pokemon.type2}</div>}
</div>;
