import React from 'react';
import { PokemonTitle } from '../PokemonTitle';
import { Link } from "react-router-dom";
import styles from './style.module.css';

export function PokemonTitleBar({ match, pokemon }) {
    return <div className={styles.pokemonTitleBar}>
        <Link to={`${match.url}/prev`}>Prev</Link>
        <PokemonTitle pokemon={pokemon} />
        <Link to={`${match.url}/next`}>Next</Link>
    </div>;
}
