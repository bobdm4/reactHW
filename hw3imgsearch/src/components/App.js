import React, { Component } from 'react';

import * as api from '../services/imgList';

import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    isOpen: false,
    largeImageUrl: '',
    query: '',
    page: 1,
  };

  componentDidMount() {
    this.fetchImgAsyncAwait();
    window.addEventListener('keydown', this.escKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    const { images } = this.state;
    if (prevState.images.length !== images.length) {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escKeyDown);
  }

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  fetchImgAsyncAwait = async () => {
    const { query, page } = this.state;
    const responce = await api.fetchImg(query, page);
    this.setState(s => ({
      page: +s.page + 1,
      images: [...s.images, ...responce.data.hits],
    }));
  };

  loadMore = () => {
    this.fetchImgAsyncAwait();
    window.scrollBy(0, window.innerHeight);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      page: 1,
      images: [],
    });
    this.fetchImgAsyncAwait();
  };

  openModal = largeImageUrl => {
    this.setState({
      isOpen: true,
      largeImageUrl,
    });
  };

  closeModal = e => {
    if (e.target.nodeName !== 'IMG') {
      this.setState({
        isOpen: false,
      });
    }
  };

  // scrollBy = () => {
  //   // const top = window.innerHeight;
  //   window.scrollBy({
  //     top: window.innerHeight,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };

  escKeyDown = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { images, query, isOpen, largeImageUrl } = this.state;
    return (
      <div>
        <SearchForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={query}
        />
        <Gallery
          openModal={this.openModal}
          images={images}
          onClick={this.loadMore}
        />
        {isOpen && <Modal onClick={this.closeModal} imgUrl={largeImageUrl} />}
      </div>
    );
  }
}

export default App;
