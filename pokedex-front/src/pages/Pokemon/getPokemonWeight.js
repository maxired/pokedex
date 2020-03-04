export const getPokemonWeight = (pokemon) => {
    if (pokemon.weight < 10)
        return `${pokemon.weight * 100} g`;
    return `${pokemon.weight / 10} kg`;
};
