import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.module.css';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

const filterMovies = (items, filter) => {
  return items.filter(item =>
    item.title.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class MovieGrid extends Component {
  state = {
    searchInput: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { items } = this.props;
    const { searchInput } = this.state;
    const filteredMovies = filterMovies(items, searchInput);
    return (
      <div>
        <SearchBar searchInput={searchInput} onChange={this.handleChange} />
        {filteredMovies.length > 0 ? (
          <ul className={style.movieGrid}>
            <MovieCard items={filteredMovies} />
          </ul>
        ) : (
          <p>No matching results!</p>
        )}
      </div>
    );
  }
}
MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
