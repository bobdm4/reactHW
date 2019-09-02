import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import style from './styles.module.css';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

export default class MovieGrid extends Component {
  state = {};

  render() {
    const { items } = this.props;

    console.log(items);
    return (
      <div>
        <SearchBar />
        <ul className={style.movieGrid}>
          <MovieCard items={items} />
        </ul>
      </div>
    );
  }
}
