import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm } from 'redux-form';

// field validation functions
const required = value => (value ? undefined : 'Required');

// @TODO: implement ARIA roles

/* eslint-disable react/prop-types */
const renderField = ({
  input,
  label,
  type,
  autoFocus,
  textarea,
  meta: { touched, error, warning },
}) => {
  // @TODO: kinda hacky, evaluate...
  const Input = !textarea ? 'input' : 'textarea';
  const warningClass = touched && (error || warning) ? 'visible' : '';

  return (
    <div className="input-container">
      <Input {...input} placeholder={label} type={type} autoFocus={autoFocus} />
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
    console.log(values);

    // send email...
    return fetch('https://formspree.io/willashe@hotmail.com', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .catch(error => console.error('Error: ', error))
      .then(response => {
        if (!response || response.success !== 'email sent') {
          console.error('Error: ', response);
          throw Error(response.statusText);
        }
        console.log('Success: ', response);

        console.log('do some cool contact-form specific animation...');
        setTimeout(() => {
          console.log('...then fire the callback (to close the modal)!');
          const { submitCallback } = this.props;
          typeof submitCallback === 'function' && submitCallback();
        }, 1000);
      });
  };

  render() {
    const { handleSubmit, submitSucceeded, submitFailed } = this.props;

    return (
      <div className="contact-form" aria-label="Contact Form">
        <h1>Contact</h1>
        <Form onSubmit={handleSubmit(this.submit)}>
          <Field
            name="name"
            type="text"
            component={renderField}
            label="Name"
            validate={[required]}
            autoFocus={true}
          />
          <Field
            name="email"
            type="text"
            component={renderField}
            label="Email"
            validate={[required]}
          />
          <Field
            name="message"
            type="text"
            textarea
            component={renderField}
            label="Message"
            validate={[required]}
            cols="40"
          />
          <button type="submit">Submit</button>
          {submitFailed && <div>FAILED!</div>}
          {submitSucceeded && <div>WHEEE!</div>}
        </Form>
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
