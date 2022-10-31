import { Component } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';
import { Overlay, ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    other: PropTypes.string,
    largeImageLink: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { other, largeImageLink } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalImage>
          <img src={largeImageLink} alt={other} />
        </ModalImage>
      </Overlay>,
      modalRoot
    );
  }
}
