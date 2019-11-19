import React from 'react';


function Botao(props) {
  return (
  <button 
    onClick={() => {props.handleClick(props.value)}}
  >
    {props.value}
  </button>
  )
}

export default Botao;
