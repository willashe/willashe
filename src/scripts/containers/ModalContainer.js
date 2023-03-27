import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

import Modal from '../components/Modal'
import ContactModal from '../components/ContactModal'

const ModalContainer = ({ modalType, modalTitle, modalText }) => {
  let modalComponent = null

  switch (modalType) {
    case 'contact':
      modalComponent = <ContactModal />
      break
    case 'simple':
      modalComponent = <Modal title={modalTitle}>{modalText}</Modal>
      break
  }

  return (
    <CSSTransitionGroup
      transitionName="modal"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={700}
    >
      {modalComponent}
    </CSSTransitionGroup>
  )
}

ModalContainer.propTypes = {
  modalType: PropTypes.string,
  modalTitle: PropTypes.string,
  modalText: PropTypes.string,
}

function mapStateToProps({ modal }) {
  return {
    modalType: modal.modalType,
    modalTitle: modal.modalTitle,
    modalText: modal.modalText,
  }
}

export default connect(mapStateToProps)(ModalContainer)
