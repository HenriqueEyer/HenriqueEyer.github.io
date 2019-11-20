import React from 'react';
import './Pokedex.css';
import Pokemon from './Pokemon.js'



class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props
        return (
            <div className="Pokedex">
                <Pokemon pokemon={pokemons}/>
            </div>
        )
    }
}
export default Pokedex;
