import React, { useState, useEffect } from 'react'
import { PokemonTitle } from './PokemonTitle';
import { PokemonDescription } from './PokemonDescription';
import { PokemonImage } from './PokemonImage';
import { PokemonMiscInfo } from './PokemonMiscInfo';
import { PokemonTypeInfo } from './PokemonTypeInfo';
import { PokemonStatsTable } from './PokemonStatsTable';

const PokemonPage = () => {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4000/api/10')
            .then(res => res.json())
            .then(({pokemon}) => setPokemon(pokemon))
    }, [])

    if (!pokemon) {
        return  <div>Loading</div>
    }

console.log(pokemon)
    return <div>
        <PokemonTitle pokemon={pokemon} />
        <div className="fullinfogrid">
            <PokemonImage pokemon={pokemon} />
            <PokemonDescription />
            <PokemonMiscInfo pokemon={pokemon} />
            <PokemonTypeInfo pokemon={pokemon} />
            <PokemonStatsTable pokemon={pokemon} />
        </div>
    </div>
}


export default PokemonPage