import React, { PureComponent } from 'react';

import Skillset from './Skillset';
import Modal from './Modal';
import ContactForm from './ContactForm';
import { tween, easing } from 'popmotion';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      modalInTransition: false,
      v: {
        modalTop: -50,
        bgOpacity: 0,
      },
    };
  }

  updateModal = v => {
    this.setState({
      v: {
        modalTop: v.modalTop,
        bgOpacity: v.bgOpacity,
      },
    });
  };

  openModal = () => {
    this.setState({ modalInTransition: true }, () => {
      tween({
        from: {
          modalTop: -50,
          bgOpacity: 0,
        },
        to: {
          modalTop: 50,
          bgOpacity: 0.65,
        },
        duration: 700,
        ease: easing.backInOut,
      }).start({
        update: this.updateModal,
        complete: () => {
          this.setState({
            modalOpen: true,
            modalInTransition: false,
          });
        },
      });
    });
  };

  closeModal = () => {
    this.setState({ modalInTransition: true }, () => {
      tween({
        from: {
          modalTop: 50,
          bgOpacity: 0.65,
        },
        to: {
          modalTop: 150,
          bgOpacity: 0,
        },
        duration: 700,
        ease: easing.backInOut,
      }).start({
        update: this.updateModal,
        complete: () => {
          this.setState({
            modalOpen: false,
            modalInTransition: false,
          });
        },
      });
    });
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

        <Modal
          v={this.state.v}
          open={this.state.modalInTransition || this.state.modalOpen}
          handleClose={this.state.modalInTransition ? null : this.closeModal}
        >
          <ContactForm />
        </Modal>
      </div>
    );
  }
}

export default Home;
