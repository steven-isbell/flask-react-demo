import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ children, show }) => {
  return (
    <div
      style={{
        display: show ? 'block' : 'none',
        position: 'absolute',
        zIndex: 10,
        height: '100vh',
        background: 'black',
        opacity: 0.7
      }}
    >
      {createPortal(children, document.getElementById('portal'))}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
