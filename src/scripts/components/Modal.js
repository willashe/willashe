import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown, true);
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.show && !nextProps.show) {
      // close modal
      console.log('close');
    } else if (!this.props.show && nextProps.show) {
      // open modal
      console.log('open');
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.props.handleClose();
    }
  };

  preventClose = e => {
    e.stopPropagation();
  };

  render() {
    const { show, handleClose, children } = this.props;

    if (!show) {
      return null;
    }

    return (
      <div className="modal-backdrop" onClick={handleClose}>
        <div className="modal-body" onClick={this.preventClose}>
          {children}

          <div className="modal-footer">
            <button onClick={handleClose}>Close</button>
          </div>
        </div>

        <div className="marquee bottom" onClick={this.preventClose} />
      </div>
    );
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
