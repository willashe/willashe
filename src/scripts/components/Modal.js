import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';

import { closeModal } from '../actions';

// @TODO: implement focus trap
class Modal extends PureComponent {
  componentDidMount() {
    const childInputs = this.modalRef.getElementsByTagName('input');
    const childButtons = this.modalRef.getElementsByTagName('button');

    console.log(childInputs);
    console.log(childButtons);
    window.addEventListener('keydown', this.handleKeyDown, true);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown, true);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.props.closeModal();
    }

    // if (e.key === 'Tab' || e.keyCode === 9) {
    //   if (e.shiftKey) {

    //   } else {

    //   }
    // }
  };

  preventClose = e => {
    e.stopPropagation();
  };

  render() {
    const { title, actions, closeModal, children } = this.props;

    return (
      <div
        ref={modal => {
          this.modalRef = modal;
        }}
        className="modal"
        onClick={closeModal}
      >
        <div className="modal-body" onClick={this.preventClose} role="dialog">
          <div className="modal-content">
            {title && <h1>{title}</h1>}

            {children}

            <div className="modal-footer">
              {map(actions, (action, i) => {
                return (
                  <button
                    key={i}
                    onClick={action.action}
                    disabled={action.disabled}
                  >
                    {action.label}
                  </button>
                );
              })}
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object),
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default connect(null, { closeModal })(Modal);
