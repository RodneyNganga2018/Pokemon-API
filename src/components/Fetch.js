import React,{useEffect, useState} from 'react';
import styles from './Fetch.module.css';

const Fetch = (props) => {
    const [pokemon, getPokemon] = useState(0)

    useEffect( () =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => response.json())
            .then(response => getPokemon(response.results));
    }, [])

    const handleFetch = () => {
        props.newFetch(pokemon);
    }

    return (
        <>
            <button className={styles.button} onClick={handleFetch}>Fetch Pokemon</button>
        </>
    )
}

export default Fetch;