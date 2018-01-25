import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show, handleClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-body">
        {children}

        <div className="modal-footer">
          <button onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
