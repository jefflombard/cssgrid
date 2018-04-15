import React, { Component } from 'react';
import MockContainer from './components/MockContainer';
import ControlPanel from './components/ControlPanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ControlPanel />
        <MockContainer />
      </div>
    );
  }
}

export default App;
