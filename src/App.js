import './App.css';
import React, {useState} from 'react';
import Fetch from './components/Fetch';
import List from './components/List';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const handleFetch = (names) => {
    let arr = [];
    for (let i=0; i<names.length; i++) {
      arr.push(names[i].name);
    }
    setPokemon(arr);
  }

  return (
    <div className="App">
      <Fetch newFetch={handleFetch}/>
      <List pokemon={pokemon}/>
    </div>
  );
}

export default App;
