import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Modal extends PureComponent {
  preventClose = e => {
    e.stopPropagation();
  };

  render() {
    const { children, handleClose } = this.props;

    return (
      <div className="modal" onClick={handleClose}>
        <div className="modal-body" onClick={this.preventClose}>
          <div className="modal-content">
            {children}

            <div className="modal-footer">
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
