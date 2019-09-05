import React from 'react';
import PropTypes from 'prop-types';
import style from './SearchBar.module.css';

const SearchBar = ({ searchInput, onChange }) => {
  return (
    <div>
      <input
        name="searchInput"
        type="text"
        value={searchInput}
        onChange={onChange}
        className={style.input}
        placeholder="Enter title..."
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
