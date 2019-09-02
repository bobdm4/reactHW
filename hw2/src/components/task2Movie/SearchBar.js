import React from 'react';
import style from './styles.module.css';

const SearchBar = () => {
  return (
    <div>
      <input type="text" className={style.input} />
    </div>
  );
};

export default SearchBar;
