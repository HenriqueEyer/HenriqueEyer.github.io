import React from 'react';
import './Pokedex.css';
import Pokemon from './Pokemon.js'
import data from './data.js'


class Pokedex extends React.Component {
    render() {
        return (
            <div className="Pokedex">
                {data.map(pokemons => <Pokemon pokemon={pokemons} />)}
            </div>
        )
    }
}
export default Pokedex;
