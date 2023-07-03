
import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const ul = {
    display: 'inline-block',
    textAlign: 'left'

  };
  useEffect(()=>{
    axiosPokemons();
  },[])

  const [pokemons, setPokemons] = useState([]);
  const axiosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        console.log(res.data.results);
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      })



  }
  return (
    <div className="App">
      <button onClick={axiosPokemons}>axios pokemons</button><br />
      <ul style={ul}>{pokemons.map((pokemon,idx) => {
        return (
          <li key={idx}>{pokemon.name}</li>
        )
      })}
      </ul>

    </div>
  );
}

export default App;
