import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { closeModal } from '../actions';

class Modal extends PureComponent {
  preventClose = e => {
    e.stopPropagation();
  };

  render() {
    const { children, closeModal } = this.props;

    return (
      <div className="modal" onClick={closeModal}>
        <div className="modal-body" onClick={this.preventClose} role="dialog">
          <div className="modal-content">
            {children}

            <div className="modal-footer">
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default connect(null, { closeModal })(Modal);
