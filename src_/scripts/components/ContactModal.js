import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  submit,
  isPristine,
  isInvalid,
  isSubmitting,
  hasSubmitSucceeded,
} from 'redux-form';

import Modal from './Modal';
import ContactForm from './ContactForm';

import { closeModal } from '../actions';

class ContactModal extends PureComponent {
  modalContactSubmit = () => {
    this.props.submit('contact');
  };

  render() {
    const {
      pristine,
      invalid,
      submitting,
      submitSucceeded,
      closeModal,
    } = this.props;

    return (
      <Modal
        actions={[
          {
            label: 'Submit',
            action: this.modalContactSubmit,
            disabled: pristine || invalid || submitting || submitSucceeded,
            default: true,
          },
        ]}
      >
        <ContactForm submitCallback={closeModal} />
      </Modal>
    );
  }
}

ContactModal.propTypes = {
  submit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    pristine: isPristine('contact')(state),
    invalid: isInvalid('contact')(state),
    submitting: isSubmitting('contact')(state),
    submitSucceeded: hasSubmitSucceeded('myForm')(state),
  }),
  { submit, closeModal }
)(ContactModal);
