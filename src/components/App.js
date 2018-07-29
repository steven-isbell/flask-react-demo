import React, { Component } from 'react';
import Hello from './Hello/Hello';

class App extends Component {
  state = { hello: '', name: 'Steven' };
  getHello = async () => {
    const response = await fetch('/api/hello');
    const hello = await response.json();
    this.setState({ hello });
  };
  render() {
    return (
      <div>
        <Hello name={this.state.name} getHello={this.getHello} />
      </div>
    );
  }
}

export default App;
