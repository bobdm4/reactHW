import React from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

const SearchForm = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} className={s.searchform}>
      <input
        name="query"
        onChange={onChange}
        value={value}
        type="text"
        autoComplete="off"
        placeholder="Search images..."
      />
    </form>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
