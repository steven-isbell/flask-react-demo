import React from 'react';
import PropTypes from 'prop-types';

const ErrorModal = ({ type, handleChildState }) => {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 10,
        height: '100vh',
        width: '100vw',
        background: 'black',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '5px',
          background: 'salmon',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
        <h1>{type}</h1>
        <button onClick={() => handleChildState({ didErr: false })}>
          Close
        </button>
      </div>
    </div>
  );
};

ErrorModal.propTypes = {
  type: PropTypes.string.isRequired,
  handleChildState: PropTypes.func.isRequired
};

export default ErrorModal;
