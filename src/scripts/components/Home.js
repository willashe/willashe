import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Skillset from './Skillset';
import Modal from './Modal';
import ContactForm from './ContactForm';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div className="home">
        <div className="intro">
          <h1>Will Ashe</h1>
          <h2>
            Web Developer<br />Austin, TX
          </h2>
          <div className="contact-info">
            <a onClick={this.openModal}>Contact</a>
            <a href="http://www.linkedin.com/in/will-ashe">LinkedIn</a>
            <a href="https://github.com/willashe">GitHub</a>
          </div>
        </div>

        <Skillset />

        <CSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {this.state.modalOpen && (
            <Modal handleClose={this.closeModal}>
              <ContactForm />
            </Modal>
          )}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Home;
