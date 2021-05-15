import React,{useEffect, useState} from 'react';
import styles from './Fetch.module.css';
import axios from 'axios';

const Fetch = (props) => {
    const [pokemon, setPokemon] = useState(0)

    useEffect( () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0').then(response=>{
            setPokemon(response.data.results);
        })
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