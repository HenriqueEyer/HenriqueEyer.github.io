import React, { Component } from 'react';
import Header from './component/Header';
import Game from './component/Game';
import EndGame from './component/EndGame';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houseActive: [],
      player: 1,
      endGame: '',
    };

    this.changeEndGame = this.changeEndGame.bind(this);
    this.addHouse = this.addHouse.bind(this);
  }

  changeEndGame(frase) {
    this.setState({ endGame: frase });
  }

  addHouse(house) {
    this.setState((state) => ({
      houseActive: [...state.houseActive, house],
      player: (state.player * -1),
    }));
  }

  render() {

    if (this.state.endGame!=='') return <EndGame text={this.state.endGame} />

    return (
      <div className="App">
        <Header />
        <Game
          listHouseActive={this.state.houseActive}
          changeEndGame={this.changeEndGame}
          addHouse={this.addHouse}
          player={this.state.player}
        />
      </div>
    );
  }
}

export default App;
