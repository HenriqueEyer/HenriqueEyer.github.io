import React from 'react';
import './App.css';
import Pokedex from './Pokedex.js'
import Botao from './Botao'
import BotaoType from './BotaoType'
import data from './data.js'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      pokemonNumber:0,
      type: 'Psychic',
      size: 2,
    }
  }
    setNumberPokemon = (pokemonNumber) => {
      if(pokemonNumber === this.state.size){
        this.setState({pokemonNumber:0});
      } else {
        this.setState({pokemonNumber});
      }
    }

    setType = (type,size) => {
      this.setState({type});
      this.setState({size});
      this.setState({pokemonNumber:0})
    }


  render() {
    const allType = data.map((pokemon)=> pokemon.type)
    const types = allType.filter((type, index) => allType.indexOf(type) === index);
    const typesNum = types.map((type) => 
      allType.reduce((acc,types)=> {
        let num=acc;
        if(type === types) num+=1;
        return num; 
         },0)
    )
    const getArr=({type, pokemonNumber})=> {
      return data.filter(pokemons => {
        if(type==='All'){
          return true;
        } else {
          return pokemons.type===type;
        }
      })[pokemonNumber];
    }
    return (
      <div className="App">
        <h1>POKEDEX</h1>
        <Pokedex pokemons={getArr(this.state)} />
        <div>
          <BotaoType key={0} handleClick={this.setType} value={['All', data.length]}/>
          {types.map((type,index) =>
            <BotaoType
              key={index+1}
              handleClick={this.setType}
              value={[type, typesNum[index]]}/>
            )}
        </div>
        <div>
        <Botao handleClick={this.setNumberPokemon} value={this.state.pokemonNumber} namebtn="Proximo" disable={(this.state.size===1)?true:false}/>
        </div>
      </div>
    );
  }
}

export default App;
