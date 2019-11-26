import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
        data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }

  shouldComponentUpdate() {
    return this.state.data % 3 === 0;
  }

  componentDidMount(){
    alert('AtualizouPrima')
  }

  componentDidUpdate(){
    alert('FOIIII')
  }

  componentWillUnmount(){
    localStorage.setItem("aaaa", "dsadsadsas")
  }
  
  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}

class Content extends React.Component {

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default App;
