import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import FileForm from './components/FileForm';
import TeamBuilder from './components/TeamBuilder';

class App extends Component {
  state = { names: [] };
  handleChildState = val => {
    this.setState(val);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Random Team Generator</h1>
        </header>
        <div>
          <h3>Submit a CSV with a names column and rows of names.</h3>
          <FileForm handleChildState={this.handleChildState} />
        </div>
        <TeamBuilder {...this.state} />
      </div>
    );
  }
}

export default App;
