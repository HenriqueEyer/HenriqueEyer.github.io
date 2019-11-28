import React from 'react';

import DetailsPokemon from './DetailsPokemon.js'

class Pokemon extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
          <DetailsPokemon pokemon={pokemon} />
        )
    }
}

export default Pokemon;
