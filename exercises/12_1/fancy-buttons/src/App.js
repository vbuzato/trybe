import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super() 

    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.fnOne = this.fnOne.bind(this)
    this.fnTwo = this.fnTwo.bind(this)
    this.fnThree = this.fnThree.bind(this)
    
    this.state = {
      btOne: 0,
      btTwo: 0,
      btThree: 0,
    }
  }

  fnOne() { 
    this.setState((previousState, _props) => ({ 
      btOne: previousState.btOne + 1
    }));
  }
  
  fnTwo() { 
    this.setState((previousState, _props) => ({ 
      btTwo: previousState.btTwo + 1
    }));
  }
  
  fnThree() { 
    this.setState((previousState, _props) => ({ 
      btThree: previousState.btThree + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <div>
          Botão 1: {this.state.btOne} <br />
          Botão 2: {this.state.btTwo} <br />
          Botão 3: {this.state.btThree} <br />
        </div>
        <button onClick={this.fnOne}>My button 1</button>
        <button onClick={this.fnTwo}>My button 2</button>
        <button onClick={this.fnThree}>My button 3</button>
      </div>
    );
  }
}

export default App;
