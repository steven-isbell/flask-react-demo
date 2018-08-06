import React, { Component } from 'react';
import axios from 'axios';

class TeamBuilder extends Component {
  handleShuffle = async (size = 2, names) => {
    const teams = await axios.post('/api/teams', { size, names });
  };
  render() {
    return (
      <div>
        <p>How many people per team?</p>
        <input type="number" />
        <button
          onClick={() =>
            this.handleShuffle(this.props.teamSize, this.props.names)
          }
        >
          Generate
        </button>
      </div>
    );
  }
}

export default TeamBuilder;
