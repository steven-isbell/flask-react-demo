import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import FileForm from './components/FileForm';
import TeamCount from './components/TeamCount';
import Modal from './components/Modal';
import ErrorModal from './components/ErrorModal';

// rewrite so they upload a file or enter comma delimited string,
// and the number of teams
// then randomize on the server

class App extends Component {
  state = { form: '', size: 0, didErr: false, errMessage: '' };
  handleChildState = val => {
    this.setState(val);
  };
  handleFormSubmit = node => {
    const formData = new FormData();
    formData.append('data_file', node.files[0]);
    formData.append('filename', 'data_file');
    this.setState(() => ({ form: formData }));
    // const names = data.split('\n').map(val => val.split(',')[0]);
  };
  generateTeams = async () => {
    if (!this.state.size || !this.state.form) {
      this.setState(() => ({
        didErr: true,
        errMessage: 'Please include a team size and a list of names'
      }));
    }
    const response = await axios.post('/api/teams', {
      size: this.state.size,
      form: this.state.form
    });
    console.log(response);
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
          <FileForm handleFormSubmit={this.handleFormSubmit} />
        </div>
        {TeamCount({
          handleChildState: this.handleChildState,
          size: this.state.size
        })}
        <button onClick={this.generateTeams}>Submit</button>
        {this.state.didErr && (
          <Modal show={this.state.didErr}>
            {ErrorModal({
              type: this.state.errMessage,
              handleChildState: this.handleChildState
            })}
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
