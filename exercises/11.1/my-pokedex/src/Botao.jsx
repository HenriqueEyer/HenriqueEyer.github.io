import React from 'react';
import './Botao.css';

function Botao(props) {
  return (
  <button className="btnNext"
    onClick={() => {props.handleClick(props.value+1)}}
    disabled={props.disable}
  >
    {props.namebtn}
  </button>
  )
}

export default Botao;
