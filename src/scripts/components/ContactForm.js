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
        <h1>Contact</h1>
        <form>
          <input
            placeholder="Name"
            ref={input => {
              this.nameInput = input;
            }}
            id="name-input"
            type="text"
          />
          <input placeholder="Email" id="email-input" type="text" />
          <textarea placeholder="Message" id="message-input" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
