import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { openModal } from '../actions'

class Home extends PureComponent {
  openContactModal = () => {
    this.props.openModal('contact')
  }

  render() {
    return (
      <div className="contact-info">
        <a
          href="http://www.linkedin.com/in/will-ashe"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/willashe"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    )
  }
}

Home.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default connect(null, { openModal })(Home)
