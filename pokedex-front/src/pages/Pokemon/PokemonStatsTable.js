import React from 'react';
const STATS_LINE = ['Attack', 'Defense', 'HP', 'Special Attack', 'Special Defense', 'Speed'];

const PokemonStatLine = ({ pokemon, stat }) => {
    const statNormalized = pokemon[stat] / 255;
    return [
        <div class="statName">{stat} :</div>,
        <div class="statBar" style={{
            width: `${statNormalized * 100}%`,
            backgroundColor: `hsl(${statNormalized * 200},60%,50%)`
        }}>
            {pokemon[stat]}
        </div>
    ];
};

export const PokemonStatsTable = ({ pokemon }) => <div class="statsTable">
    {STATS_LINE.map((stat) => <PokemonStatLine pokemon={pokemon} stat={stat} />)}
</div>;
