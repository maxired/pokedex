import React from 'react';
import { getPokemonWeight } from './getPokemonWeight';

export const PokemonMiscInfo = ({ pokemon }) => (<div class="miscInfo">
    <div class="info">
        <div class="infoTitle">Height</div>
        <div class="infoData">{pokemon.height / 10} m</div>
    </div>
    <div class="info">
        <div class="infoTitle">Category</div>
        <div class="infoData">{pokemon.category}</div>
    </div>
    <div class="info">
        <div class="infoTitle">Weight</div>
        <div class="infoData">
            {getPokemonWeight(pokemon)}
        </div>
    </div>
    <div class="info">
        <div class="infoTitle">Abilities</div>
        <div class="infoData">
            {pokemon.ability1 && <div>{pokemon.ability1}</div>}
            {pokemon.ability2 && <div>{pokemon.ability2}</div>}
            {pokemon.ability3 && <div>{pokemon.ability3}</div>}
        </div>
    </div>
</div>);
