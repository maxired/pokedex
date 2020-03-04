import React from 'react';
import { getPokemonWeight } from './getPokemonWeight';

export const PokemonMiscInfo = ({ pokemon }) => (<div className="miscInfo">
    <div className="info">
        <div className="infoTitle">Height</div>
        <div className="infoData">{pokemon.height / 10} m</div>
    </div>
    <div className="info">
        <div className="infoTitle">Category</div>
        <div className="infoData">{pokemon.category}</div>
    </div>
    <div className="info">
        <div className="infoTitle">Weight</div>
        <div className="infoData">
            {getPokemonWeight(pokemon)}
        </div>
    </div>
    <div className="info">
        <div className="infoTitle">Abilities</div>
        <div className="infoData">
            {pokemon.ability1 && <div>{pokemon.ability1}</div>}
            {pokemon.ability2 && <div>{pokemon.ability2}</div>}
            {pokemon.ability3 && <div>{pokemon.ability3}</div>}
        </div>
    </div>
</div>);
