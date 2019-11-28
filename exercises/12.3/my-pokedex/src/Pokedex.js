import React from 'react';
import './Pokedex.css';
import Pokemon from './Pokemon.js'



class Pokedex extends React.Component {
    render() {
        const { pokemons, array } = this.props
        
        return (
            <div className="Pokedex">
                <Pokemon pokemon={pokemons} />
                {this.props.children(array)}
            </div>
        )
    }
}
export default Pokedex;
