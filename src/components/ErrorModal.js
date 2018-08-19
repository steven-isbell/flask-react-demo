import React from 'react';
import PropTypes from 'prop-types';

const ErrorModal = ({ type, handleChildState }) => {
  return (
    <div>
      <h1>{type}</h1>
      <button onClick={() => handleChildState({ didErr: false })}>Close</button>
    </div>
  );
};

ErrorModal.propTypes = {
  type: PropTypes.string.isRequired,
  handleChildState: PropTypes.func.isRequired
};

export default ErrorModal;
