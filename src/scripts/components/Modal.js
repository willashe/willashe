import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { tween, easing } from 'popmotion';

class Modal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalTop: -50,
      backdropOpacity: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown, true);
  }

  componentWillReceiveProps = nextProps => {
    if (!this.props.modalOpen && nextProps.modalOpen) {
      this.openModal();
    }
  };

  updateModal = data => {
    this.setState({
      modalTop: data.modalTop,
      backdropOpacity: data.backdropOpacity,
    });
  };

  openModal = () => {
    tween({
      from: {
        modalTop: -50,
        backdropOpacity: 0,
      },
      to: {
        modalTop: 50,
        backdropOpacity: 0.65,
      },
      duration: 700,
      ease: easing.backInOut,
    }).start({ update: this.updateModal });
  };

  closeModal = () => {
    tween({
      from: {
        modalTop: 50,
        backdropOpacity: 0.65,
      },
      to: {
        modalTop: 150,
        backdropOpacity: 0,
      },
      duration: 700,
      ease: easing.backInOut,
    }).start({
      update: this.updateModal,
      complete: () => {
        this.props.handleClose();
      },
    });
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
    const { modalOpen, children } = this.props;
    console.log(this.state.backdropOpacity);
    if (!modalOpen) {
      return null;
    }

    return (
      <div
        className="modal-backdrop"
        onClick={this.closeModal}
        style={{ background: `rgba(0,0,0,${this.state.backdropOpacity}` }}
      >
        <div
          className="modal-body"
          onClick={this.preventClose}
          style={{ top: `${this.state.modalTop}%` }}
        >
          <div className="modal-content">
            {children}

            <div className="modal-footer">
              <button onClick={this.closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func,
  modalOpen: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
