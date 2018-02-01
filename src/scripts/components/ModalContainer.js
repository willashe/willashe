import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import Modal from './Modal';

class ModalContainer extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown, true);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown, true);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.props.handleClose();
    }
  };

  render() {
    const { modalOpen, handleClose, children } = this.props;

    return (
      <CSSTransitionGroup
        transitionName="modal"
        transitionEnterTimeout={750}
        transitionLeaveTimeout={700}
      >
        {modalOpen && <Modal handleClose={handleClose}>{children}</Modal>}
      </CSSTransitionGroup>
    );
  }
}

ModalContainer.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ModalContainer;
