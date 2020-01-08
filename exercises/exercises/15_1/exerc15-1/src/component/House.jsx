import React from 'react';
import './house.css';

function House(props) {
  const {
    addHouse,
    player,
    col,
    line,
    status,
  } = props;

  const house = {
    posC: col,
    posL: line,
    player,
  }
  
  const selectPlayer=()=>{
    return <h2>{ status.player === 1 ? '0':'X'}</h2>
  }
  
  const verifyStatus = () => {
    return (status===undefined)
  }

  return (
    <div className='house' onClick={() => addHouse(house)} disabled={!verifyStatus()}>
      {verifyStatus() && ''}
      {!verifyStatus() && selectPlayer()}
    </div>
  );
}

export default House;
