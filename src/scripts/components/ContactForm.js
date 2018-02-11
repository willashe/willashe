import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm } from 'redux-form';
import { CSSTransitionGroup } from 'react-transition-group';

// field validation functions
const required = value => (value ? undefined : 'Required field');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength40 = maxLength(40);
const maxLength600 = maxLength(600);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength3 = minLength(3);
const minLength10 = minLength(10);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

/* eslint-disable react/prop-types */
const renderField = ({
  input,
  label,
  type,
  autoFocus,
  textarea,
  minLength,
  maxLength,
  meta: { touched, error, warning },
}) => {
  // @TODO: kinda hacky, evaluate...
  const Input = !textarea ? 'input' : 'textarea';
  const warningClass = touched && (error || warning) ? '' : 'hidden';

  return (
    <div className="input-container">
      <Input
        {...input}
        placeholder={label}
        type={type}
        autoFocus={autoFocus}
        minLength={minLength}
        maxLength={maxLength}
      />
      <span className={warningClass}>
        {error}
        {warning}
      </span>
    </div>
  );
};
/* eslint-disable no-use-before-define */

class ContactForm extends PureComponent {
  submit = values => {
    // display submitting overlay/indicator

    return fetch('https://formsspree.io/willashe@hotmail.com', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .catch(error => {
        // display error message
        console.error('Error: ', error);
      })
      .then(response => {
        if (!response || response.success !== 'email sent') {
          // display error message
          console.error('Error: ', response);
          throw Error(response.statusText);
        }
        console.log('Success: ', response);

        // display success message
        setTimeout(() => {
          const { submitCallback } = this.props;
          typeof submitCallback === 'function' && submitCallback();
        }, 1000);
      });
  };

  render() {
    const {
      handleSubmit,
      submitting,
      submitSucceeded,
      submitFailed,
    } = this.props;

    return (
      <div className="contact-form" aria-label="Contact Form">
        <h1>Contact</h1>
        <Form onSubmit={handleSubmit(this.submit)}>
          <Field
            name="name"
            type="text"
            component={renderField}
            label="Name"
            validate={[required, minLength3, maxLength40]}
            autoFocus={true}
            maxLength="40"
          />
          <Field
            name="email"
            type="email"
            component={renderField}
            label="Email"
            validate={[required, email, minLength10, maxLength40]}
            maxLength="40"
          />
          <Field
            name="message"
            type="text"
            textarea
            component={renderField}
            label="Message"
            validate={[required, minLength10, maxLength600]}
            cols="40"
            maxLength="600"
          />
          <button type="submit">Submit</button>
        </Form>

        <CSSTransitionGroup
          transitionName="contact-overlay"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {submitting && (
            <div className="contact-overlay">
              <div>
                Sending<span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            </div>
          )}
        </CSSTransitionGroup>
      </div>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitCallback: PropTypes.func,
};

export default reduxForm({
  form: 'contact',
})(ContactForm);
