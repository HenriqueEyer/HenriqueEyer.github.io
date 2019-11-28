import React from 'react';
import './App.css';
import Pokedex from './Pokedex.js'
import Botao from './Botao'
import BotaoType from './BotaoType'
import AllDetailsPokemon from './AllDetailsPokemon'
import AboutPokedex from './AboutPokedex'
import data from './data.js'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonNumber: 0,
      type: 'Psychic',
      size: 2,
    }
  }

  getArr = ({ type, pokemonNumber }) => {
    return data.filter(pokemons => {
      if (type === 'All') {
        return true;
      } else {
        return pokemons.type === type;
      }
    })[pokemonNumber];
  }


  setNumberPokemon = (pokemonNumber) => {
    if (pokemonNumber === this.state.size) {
      this.setState({ pokemonNumber: 0 });
    } else {
      this.setState({ pokemonNumber });
    }
  }

  setType = (type, size, ) => {
    this.setState({ type });
    this.setState({ size });
    this.setState({ pokemonNumber: 0 })
  }

  returnBtns = ({ types, typesNum }) => (
    <div className="div-btn-type">
      <BotaoType key={0} handleClick={this.setType} value={['All', data.length]} />
      {types.map((type, index) =>
        <BotaoType
          key={index + 1}
          handleClick={this.setType}
          value={[type, typesNum[index]]}
        />
      )}
      <div>
        <Botao handleClick={this.setNumberPokemon} value={this.state.pokemonNumber} namebtn="Proximo" disable={(this.state.size === 1) ? true : false} />
      </div>
    </div>
  )


  render() {
    const allType = data.map((pokemon) => pokemon.type)
    const types = allType.filter((type, index) => allType.indexOf(type) === index);
    const typesNum = types.map((type) =>
      allType.reduce((acc, types) => {
        let num = acc;
        if (type === types) num += 1;
        return num;
      }, 0)
    )



    return <BrowserRouter>
      <main className="App">
        <h1>POKEDEX</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

        <Switch>
        <Route exact path="/" render={() =>
          <Pokedex
            array={{ types, typesNum }}
            pokemons={this.getArr(this.state)}>
            {this.returnBtns}
          </Pokedex>}
        />
        <Route exact path="/about" component={AboutPokedex}/>
        {data.map((pokemon) =><Route exact path={`/pokemons/${pokemon.id}`} render={() => <AllDetailsPokemon key={pokemon.id} pokemon={pokemon}/>} />)}
        <Route render={
          ()=> (
            <div>
            <h2>Page Not Found</h2>
            <img alt="Page not found" src="https://conteudo.imguol.com.br/c/parceiros/08/2019/06/11/cena-mais-triste-de-pokemon-vai-ganhar-versao-em-pelucia-1560276957897_v2_450x450.jpg" />
            </div>
          )
        }/>
        </Switch>
      </main>
    </BrowserRouter>
  }
}

export default App;
