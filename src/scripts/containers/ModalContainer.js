import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import ContactModal from '../components/ContactModal';

import { closeModal } from '../actions';

class ModalContainer extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown, true);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown, true);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.props.closeModal();
    }
  };

  render() {
    const { modalType } = this.props;

    let modal = null;

    switch (modalType) {
      case 'contact':
        modal = <ContactModal />;
    }

    return (
      <CSSTransitionGroup
        transitionName="modal"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={700}
      >
        {modal}
      </CSSTransitionGroup>
    );
  }
}

ModalContainer.propTypes = {
  modalType: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};

function mapStateToProps({ modal }) {
  return {
    modalType: modal.modalType,
  };
}

export default connect(mapStateToProps, { closeModal })(ModalContainer);
