
import './App.css';
import { useState } from "react";

function App() {
  const ul = {
    display: 'inline-block',
    textAlign: 'left'

};

  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = () => {

    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((apiResponse) => {
        return apiResponse.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse.results);
        setPokemons(jsonResponse.results)
      })
      .catch((err) => { console.log("❌❌ Got an Error =>", err) })
  }
  return (
    <div className="App">
      <button onClick={fetchPokemons}>fetch pokemons</button><br/>
      <ul style={ul}>     {pokemons.map((pokemon) => {
        return (
          <li>{pokemon.name}</li>
        )
      })}
      </ul>

    </div>
  );
}

export default App;
