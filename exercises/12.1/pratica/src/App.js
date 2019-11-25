import React from 'react';
import Title from './Title';
import List from './List.jsx';
import './App.css'

function App() {
  return (
    <div className="App">
     <List itens={
       [{id:1, item:'A'},
        {id:2, item:'B'},
        {id:3, item:'C'},
        {id:4, item:'D'},
        {id:5, item:'E'},
       ]}>
       <Title title="Titulo Show" />
     </List>
    </div>
  );
}

export default App;
