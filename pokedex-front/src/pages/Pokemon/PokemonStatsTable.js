import React from 'react';
const STATS_LINE = ['Attack', 'Defense', 'HP', 'Special Attack', 'Special Defense', 'Speed'];

const PokemonStatLine = ({ pokemon, stat }) => {
    const statNormalized = pokemon[stat] / 255;
    return [
        <div className="statName" key="name">{stat} :</div>,
        <div className="statBar" key="bar" style={{
            width: `${statNormalized * 100}%`,
            backgroundColor: `hsl(${statNormalized * 200},60%,50%)`
        }}>
            {pokemon[stat]}
        </div>
    ];
};

export const PokemonStatsTable = ({ pokemon }) => <div className="statsTable">
    {STATS_LINE.map((stat) => <PokemonStatLine pokemon={pokemon} stat={stat} key={stat}/>)}
</div>;
