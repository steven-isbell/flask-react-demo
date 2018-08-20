import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ children, show }) => {
  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      {createPortal(children, document.getElementById('portal'))}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
