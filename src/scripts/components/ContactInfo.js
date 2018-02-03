import React, { PureComponent } from 'react';

import ModalContainer from './ModalContainer';
import ContactForm from './ContactForm';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };
  }

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.openModal();
    }
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div className="contact-info">
        <a tabIndex="1" onKeyDown={this.handleKeyDown} onClick={this.openModal}>
          Contact
        </a>
        <a href="http://www.linkedin.com/in/will-ashe">LinkedIn</a>
        <a href="https://github.com/willashe">GitHub</a>

        <ModalContainer
          modalOpen={this.state.modalOpen}
          handleClose={this.closeModal}
        >
          <ContactForm />
        </ModalContainer>
      </div>
    );
  }
}

export default Home;
