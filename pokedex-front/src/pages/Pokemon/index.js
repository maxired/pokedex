import React from 'react'
import { pokemon } from '../../data/pokemon.2.json'
import { PokemonTitle } from './PokemonTitle';
import { PokemonDescription } from './PokemonDescription';
import { PokemonImage } from './PokemonImage';
import { PokemonMiscInfo } from './PokemonMiscInfo';
import { PokemonTypeInfo } from './PokemonTypeInfo';
import { PokemonStatsTable } from './PokemonStatsTable';

const PokemonPage = () => {
    return <div>
        <PokemonTitle pokemon={pokemon} />
        <div class="fullinfogrid">
            <PokemonImage pokemon={pokemon} />
            <PokemonDescription />
            <PokemonMiscInfo pokemon={pokemon} />
            <PokemonTypeInfo pokemon={pokemon} />
            <PokemonStatsTable pokemon={pokemon} />
        </div>
    </div>
}


export default PokemonPage