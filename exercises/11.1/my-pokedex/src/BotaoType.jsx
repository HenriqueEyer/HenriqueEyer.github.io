import React from 'react';
import './BotaoType.css';

function BotaoType(props) {
    const  { value }  = props;
    const type=value[0];
    const size=value[1];
  return (
  <button className="btnType" 
    onClick={() => {props.handleClick(type, size)}}
  >
    {props.value[0]}
  </button>
  )
}

export default BotaoType;
