import { useState } from 'react';
// import { Component } from 'react';
import PropTypes from 'prop-types';
// import { render } from '@testing-library/react';
import { Modal } from 'components/Modal/Modal';
import { Item } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ other, webformatLink, largeImageLink }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Item>
      <img
        src={webformatLink}
        alt={other}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <Modal
          largeImageLink={largeImageLink}
          other={other}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    other: PropTypes.string,
    webformatLink: PropTypes.string.isRequired,
    largeImageLink: PropTypes.string.isRequired,
  }),
};

// ===============================================

// export class ImageGalleryItem1 extends Component {
//   static propTypes = {
//     other: PropTypes.string,
//     webformatLink: PropTypes.string.isRequired,
//     largeImageLink: PropTypes.string.isRequired,
//   };

//   state = {
//     isModalOpen: false,
//   };
//   openModal = () => this.setState({ isModalOpen: true });
//   closeModal = () => this.setState({ isModalOpen: false });

//   render() {
//     const { other, webformatLink, largeImageLink } = this.props;
//     const { isModalOpen } = this.state;

//     return (
//       <Item>
//         <img src={webformatLink} alt={other} onClick={this.openModal} />
//         {isModalOpen && (
//           <Modal
//             largeImageLink={largeImageLink}
//             other={other}
//             closeModal={this.closeModal}
//           />
//         )}
//       </Item>
//     );
//   }
// }

// ==================================Стара версія==============
// export const ImageGalleryItem = ({ other, webformatLink, largeImageLink }) => {
//   return (
//     <Item>
//       <img src={webformatLink} alt={other} />
//     </Item>
//   );
// };
