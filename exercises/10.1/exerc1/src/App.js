import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const arr = ['a1','a5','a4','a3','a2']
  return (
    <div>
      <ol>
      {arr.map(item=><li>{item}</li>)}
      </ol>
    </div>
  );
}


export default App;
