import React, { Component } from 'react';
import axios from 'axios';

class TeamBuilder extends Component {
  state = { size: 0 };
  handleShuffle = async (size = 2, names) => {
    const teams = await axios.post('/api/teams', { size, names });
  };
  render() {
    return (
      <div>
        <p>How many people per team?</p>
        <input
          type="number"
          onChange={e => this.setState({ size: e.target.value })}
        />
        <button
          onClick={() => this.handleShuffle(this.state.size, this.props.names)}
        >
          Generate
        </button>
      </div>
    );
  }
}

export default TeamBuilder;
