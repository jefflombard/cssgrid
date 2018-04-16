import React, { Component } from 'react';
import MockContainer from './components/MockContainer';
import ControlPanel from './components/ControlPanel';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          activeCss: {}
      }
  }
  
  logState(){
      console.log(this.state);
  }
    
  render() {
    return (
      <div className="App">
        <ControlPanel setCSS={this.setCSS.bind(this)}/>
        <MockContainer activeCss={this.state.activeCss}/>
        <button onClick={this.logState.bind(this)}>log state</button>
      </div>
    );
  }
  

  
  setCSS(css){
      this.setState({activeCss: css});
  }
}

export default App;
