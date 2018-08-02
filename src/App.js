import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import FileForm from './components/FileForm';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Random Team Generator</h1>
        </header>
        <FileForm />
      </div>
    );
  }
}

export default App;

// action="/api/students" method="post" enctype="multipart/form-data"
