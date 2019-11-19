import React from 'react';
import './App.css';
import Botao from './Botao';
import Label from './Label';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      labelText: '',
    }
  }

    setLabelText = (labelText) => {
      this.setState({ labelText })
    }

  render(){ 
    return (
    <div>
      <Label label={this.state.labelText}/>
      <div>
    <Botao handleClick={this.setLabelText} value="botao1"/>
    <Botao handleClick={this.setLabelText} value="botao2"/>
    <Botao handleClick={this.setLabelText} value="botao3"/>
      </div>
    </div>
  );
}
}

export default App;
