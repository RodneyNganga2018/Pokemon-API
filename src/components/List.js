import React from 'react';
import styles from './List.module.css';

const List = (props) => {
    return (
        <ul className={styles.list}>
            {
                props.pokemon.map( (item,i) => 
                    <li key={i}>{item}</li>
                )
            }
        </ul>
    )
}

export default List;