/* import logo from './logo.svg'; */
import './App.css';
import pokemons from './data.js';
import React from 'react';
import Pokes from './Pokes';

class App extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h1>POKEDEX</h1>
          <section>
            {
              pokemons.map(item => {
                return <Pokes key={item.name} pokemons={item} />
              })
            }
          </section>
        </div>
      </main>
    )
  }
}

export default App;
