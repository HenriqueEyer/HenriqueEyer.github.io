import React from 'react';
import './App.css';
import ListPost from './components/ListPost';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <ListPost />
    </div>
  );
}

export default App;
