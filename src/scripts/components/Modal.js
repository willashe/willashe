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
    const { v, open, handleClose, children } = this.props;
    console.log(v);
    if (!open) {
      return null;
    }

    return (
      <div
        className="modal-backdrop"
        onClick={handleClose}
        style={{ background: `rgba(0,0,0,${v.bgOpacity}` }}
      >
        <div
          className="modal-body"
          onClick={this.preventClose}
          style={{ top: `${v.modalTop}%` }}
        >
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
  open: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
