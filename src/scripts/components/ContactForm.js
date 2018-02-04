import React, { PureComponent } from 'react';

// @TODO: maybe abstract out into generic Form component
// @TODO: implement focus trap, ARIA, etc.
class ContactForm extends PureComponent {
  componentDidMount = () => {
    this.nameInput.focus();
  };

  render() {
    return (
      <div className="contact-form" aria-label="Contact Form">
        Contact form!
        <form>
          <ul>
            <li>
              <label htmlFor="name-input">Name: </label>
              <input
                ref={input => {
                  this.nameInput = input;
                }}
                id="name-input"
                type="text"
              />
            </li>
            <li>
              <label htmlFor="email-input">Email: </label>
              <input id="email-input" type="text" />
            </li>
            <li>
              <label htmlFor="message-input">Message: </label>
              <textarea id="message-input" />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default ContactForm;
