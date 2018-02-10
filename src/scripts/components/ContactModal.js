import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submit, isPristine, isInvalid, isSubmitting } from 'redux-form';

import Modal from './Modal';
import ContactForm from './ContactForm';

class ContactModal extends PureComponent {
  modalContactSubmit = () => {
    this.props.dispatch(submit('contact'));
  };

  render() {
    const { pristine, invalid, submitting } = this.props;

    return (
      <Modal
        actions={[
          {
            label: 'Submit',
            action: this.modalContactSubmit,
            disabled: pristine || invalid || submitting,
            default: true,
          },
        ]}
      >
        <ContactForm />
      </Modal>
    );
  }
}

ContactModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default connect(state => ({
  pristine: isPristine('contact')(state),
  invalid: isInvalid('contact')(state),
  submitting: isSubmitting('contact')(state),
}))(ContactModal);
