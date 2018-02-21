import React, { Component } from 'react';
import styles from './Modal.scss';

class Modal extends Component {
  render() {
    return (
      <div id='modal-background' className={styles.background}>
        <div className={styles.modal}>
          <a className={styles.close} onClick={this.props.onClose}>X</a>
          <div className={styles.content}>
          { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;