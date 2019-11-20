import React from 'react';

function Botao(props) {
  return (
  <button 
    onClick={() => {props.handleClick(props.value+1)}}
    disabled={props.disable}
  >
    {props.namebtn}
  </button>
  )
}

export default Botao;
