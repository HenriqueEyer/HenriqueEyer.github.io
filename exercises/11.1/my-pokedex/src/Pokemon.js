import React from 'react';

import DetailsPokemon from './DetailsPokemon.js'



class Pokemon extends React.Component {
    render() {
        const pokemons = this.props.pokemon
        return (
          <DetailsPokemon pokemon={pokemons} />
        )
    }
}

export default Pokemon;
