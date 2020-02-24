import React from 'react'
import { pokemon } from '../../data/pokemon.2.json'

const getPokeImageUrl = (pokemon) => {

    const imageName = `000${pokemon.pokemon_id}`.slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageName}.png`
}


const PokemonDescription = () => <div class="description">
Pellentesque dignissim blandit iaculis. Nullam eleifend molestie nibh ac venenatis. Fusce enim erat, rutrum
hendrerit varius eget, euismod at purus. In semper tempus feugiat. Morbi orci dolor, pharetra at velit id,
blandit hendrerit felis. Mauris id porttitor magna. Nullam et convallis orci, non consectetur est.
</div>


const PokemonTitle = ({ pokemon }) => <h1 class="pokename">{pokemon.name} <span class="pokeid">{ pokemon.pokemon_id }</span></h1>

const PokemonImage = ({ pokemon }) => <div class="pokeimage-container">
<img class="pokeimage"
     src={getPokeImageUrl(pokemon)}
     alt={pokemon.name} />
</div>

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


const getPokemonWeight = (pokemon) => {
    if (pokemon.weight < 10) 
        return `${pokemon.weight * 100} g`
    
    return `${pokemon.weight / 10} kg`
}

const PokemonMiscInfo = ({ pokemon }) => (
    <div class="miscInfo">
    <div class="info">
        <div class="infoTitle">Height</div>
        <div class="infoData">{ pokemon.height / 10 } m</div>
    </div>
    <div class="info">
        <div class="infoTitle">Category</div>
        <div class="infoData">{ pokemon.category }</div>
    </div>
    <div class="info">
        <div class="infoTitle">Weight</div>
        <div class="infoData">
            { getPokemonWeight(pokemon) }
        </div>
    </div>
    <div class="info">
        <div class="infoTitle">Abilities</div>
        <div class="infoData">
            { pokemon.ability1 && <div>{pokemon.ability1}</div>}
            { pokemon.ability2 && <div>{pokemon.ability2}</div>}
            { pokemon.ability3 && <div>{pokemon.ability3}</div>}
        </div>
    </div>
</div>
)

const PokemonTypeInfo = ({ pokemon }) => <div class="typeInfo">
<div>Type</div>
<div class={`type background-color-${pokemon.type1.toLowerCase()}`}>{ pokemon.type1 }</div>
{ pokemon.type2 && ' ' }
{ pokemon.type2 && <div class={`type background-color-${pokemon.type2.toLowerCase()}`}>{pokemon.type2}</div> }
</div>

const STATS_LINE = ['Attack', 'Defense', 'HP', 'Special Attack', 'Special Defense', 'Speed']

const PokemonStatLine = ({ pokemon, stat }) => {
    const statNormalized = pokemon[stat] / 255;

    return [
        <div class="statName">{ stat } :</div>,
        <div class="statBar"
            style={{ 
                width: `${statNormalized*100}%`,
                backgroundColor: `hsl(${statNormalized * 200 },60%,50%)`
            }}
        >
        {pokemon[stat]}
        </div>
    ]
}

const PokemonStatsTable = ({ pokemon }) => <div class="statsTable">
    { STATS_LINE.map((stat) => <PokemonStatLine pokemon={pokemon} stat={stat} /> )}
</div>
export default PokemonPage