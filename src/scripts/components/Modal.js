import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown, true);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.props.handleClose();
    }
  };

  preventClose = e => {
    e.stopPropagation();
  };

  render() {
    const { children, handleClose } = this.props;

    return (
      <div className="modal-backdrop" onClick={handleClose}>
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
  handleClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
