import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { greeting: '' };
  componentDidMount = async () => {
    try {
      const { data: greeting } = await axios.get('/api/hello');
      this.setState({ greeting });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.greeting}</p>
      </div>
    );
  }
}

export default App;
