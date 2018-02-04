import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import Modal from './Modal';

class ModalContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.setAttribute('id', 'modal-root');
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown, true);
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown, true);
    document.body.removeChild(this.el);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.props.handleClose();
    }
  };

  render() {
    const { modalOpen, handleClose, children } = this.props;

    return ReactDOM.createPortal(
      <CSSTransitionGroup
        transitionName="modal"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={700}
      >
        {modalOpen && <Modal handleClose={handleClose}>{children}</Modal>}
      </CSSTransitionGroup>,
      this.el
    );
  }
}

ModalContainer.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ModalContainer;
