import React from 'react';

const ContactForm = () => (
  <div className="contact-form">
    Contact form!
    <form>
      <ul>
        <li>
          <label htmlFor="name-input">Name: </label>{' '}
          <input id="name-input" type="text" />
        </li>
        <li>
          <label htmlFor="email-input">Email: </label>{' '}
          <input id="email-input" type="text" />
        </li>
        <li>
          <label htmlFor="message-input">Message: </label>{' '}
          <textarea id="message-input" />
        </li>
      </ul>
    </form>
  </div>
);

export default ContactForm;
