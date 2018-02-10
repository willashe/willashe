import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm } from 'redux-form';

// field validation functions
const required = value => (value ? undefined : 'Required');

/* eslint-disable react/prop-types */
const renderField = ({
  input,
  label,
  type,
  autoFocus,
  textarea,
  meta: { touched, error, warning },
}) => {
  const Type = !textarea ? 'input' : 'textarea';

  return (
    <div>
      <Type {...input} placeholder={label} type={type} autoFocus={autoFocus} />
      {touched &&
        ((error && <div>{error}</div>) || (warning && <div>{warning}</div>))}
    </div>
  );
};
/* eslint-disable no-use-before-define */

// @TODO: implement A11y, ARIA, etc.
class ContactForm extends PureComponent {
  submit = values => {
    console.log(values);
    // send email...
  };

  render() {
    const { handleSubmit } = this.props;

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
            autoFocus
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
          />
          <button type="submit">Submit</button>
        </Form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'contact',
})(ContactForm);
