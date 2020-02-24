import React, { useState, useEffect } from 'react'
import { PokemonDescription } from './PokemonDescription';
import { PokemonImage } from './PokemonImage';
import { PokemonMiscInfo } from './PokemonMiscInfo';
import { PokemonTypeInfo } from './PokemonTypeInfo';
import { PokemonStatsTable } from './PokemonStatsTable';
import { useParams, useRouteMatch } from "react-router-dom";
import { PokemonTitleBar } from './PokemonTitleBar';

const PokemonPage = () => {
    const { pokemonId } = useParams(); 
    const [pokemon, setPokemon] = useState(null)

    let match = useRouteMatch();
    useEffect(() => {
        fetch(`http://localhost:4000/api/${pokemonId}`)
            .then(res => res.json())
            .then(({pokemon}) => setPokemon(pokemon))
    }, [pokemonId])

    if (!pokemon) {
        return  <div>Loading</div>
    }
    return <div>
            <PokemonTitleBar match={match} pokemon={pokemon} />
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


