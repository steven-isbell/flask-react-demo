import React from 'react';
import PropTypes from 'prop-types';

const TeamCount = ({ handleChildState, size }) => (
  <div>
    <p>How many people per team?</p>
    <input
      type="number"
      onChange={e =>
        e.target.value < 0 ? 0 : handleChildState({ size: e.target.value })
      }
      value={size}
    />
  </div>
);

TeamCount.propTypes = {
  handleChildState: PropTypes.func.isRequired
};

export default TeamCount;
