import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from 'components/App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchName: '',
  };

  // Функція, що кидається у форму як prop для запису пошукового значення в state

  handleFormSubmit = searchValue => {
    const { searchName } = searchValue;
    this.setState({ searchName });
  };

  render() {
    return (
      <Container>
        <ToastContainer autoClose={3000} theme="dark" />
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery searchName={this.state.searchName} />
      </Container>
    );
  }
}
