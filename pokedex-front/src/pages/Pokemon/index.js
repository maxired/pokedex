import React from 'react'
import { pokemon } from '../../data/pokemon.2.json'

const getPokeImageUrl = () => 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'

const PokemonDescription = () => <div class="description">
Pellentesque dignissim blandit iaculis. Nullam eleifend molestie nibh ac venenatis. Fusce enim erat, rutrum
hendrerit varius eget, euismod at purus. In semper tempus feugiat. Morbi orci dolor, pharetra at velit id,
blandit hendrerit felis. Mauris id porttitor magna. Nullam et convallis orci, non consectetur est.
</div>


const PokemonTitle = ({ pokemon }) => <h1 class="pokename">{pokemon.name}<span class="pokeid">{ pokemon.pokemon_id }</span></h1>

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
        </div>
    </div>
}

export default PokemonPage