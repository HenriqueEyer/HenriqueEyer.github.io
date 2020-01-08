import React from 'react';
import House from './House';
import './game.css';

function Game(props) {
  const {
    addHouse,
    player,
    listHouseActive,
    changeEndGame,
  } = props;

  const verifyHouseActive = (col, line) => {
    const test = listHouseActive.find(({ posC, posL }) => posC === col && posL === line);
    return test;
  }

  const verifyGame = (list) => {
    if (list.length < 5) {
      return;
    }
    let result = verifylines(list);
    console.log(result)
    if (result === 3) {
      changeEndGame('PLayer1 ganhou');
    };
    if (result === -3) {
      changeEndGame('PLayer2 ganhou');
    };
    if(list.length===9){
      changeEndGame('Empate');
    }
  }

  const verifylines = (list) => {
    let EndGame = 0;
    for (let i = 0; i < 3; i += 1) {
      EndGame = verifyline(list, i, 'posC');
      if (EndGame === 3 || EndGame === -3) return EndGame;
    }
    for (let i = 0; i < 3; i += 1) {
      EndGame = verifyline(list, i, 'posL');
      if (EndGame === 3 || EndGame === -3) return EndGame;
    }

    EndGame = verifyDiagPrincipal(list);
    if (EndGame === 3 || EndGame === -3) return EndGame;

    EndGame = verifyDiagInversa(list);
    if (EndGame === 3 || EndGame === -3) return EndGame;
  }

  const verifyDiagPrincipal = (list) => {
    const allhouse = list.filter(({ posC, posL }) => posC === posL);
    return allhouse.reduce((acc, house) => (acc += house.player), 0)
  }

  const verifyDiagInversa = (list) => {
    const allhouse = list.filter(({ posC, posL }) => (posC === posL && posC === 1) || (posC - posL === 2 || posC - posL === -2));
    return allhouse.reduce((acc, house) => (acc += house.player), 0)
  }

  const verifyline = (list, index, type) => {
    const allhouse = list.filter(house => (house[type] === index));
    return allhouse.reduce((acc, house) => (acc += house.player), 0)
  }

  verifyGame(listHouseActive)

  const returnHouse = () => {
    const elements = [];
    for (let line = 0; line < 3; line += 1) {
      for (let col = 0; col < 3; col += 1) {
        elements.push(<House
          addHouse={addHouse}
          player={player}
          col={col}
          line={line}
          key={elements.length}
          status={verifyHouseActive(col, line)}
        />)
      }
    }
    return elements;
  }
  return (
    <div className="game">
      {returnHouse()}
    </div>
  );
}

export default Game;
