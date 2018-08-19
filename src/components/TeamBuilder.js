import React from 'react';
import PropTypes from 'prop-types';

const TeamBuilder = ({ handleChildState }) => (
  <div>
    <p>How many people per team?</p>
    <input
      type="number"
      onChange={e => handleChildState({ size: e.target.value })}
    />
  </div>
);

TeamBuilder.propTypes = {
  handleChildState: PropTypes.func.isRequired
};

export default TeamBuilder;
