import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { openModal } from '../actions';

class Home extends PureComponent {
  openContactModal = () => {
    this.props.openModal('contact');
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.openContactModal();
    }
  };

  render() {
    return (
      <div className="contact-info">
        <a
          tabIndex="1"
          onKeyDown={this.handleKeyDown}
          onClick={this.openContactModal}
        >
          Contact
        </a>
        <a href="http://www.linkedin.com/in/will-ashe">LinkedIn</a>
        <a href="https://github.com/willashe">GitHub</a>
      </div>
    );
  }
}

Home.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default connect(null, { openModal })(Home);
