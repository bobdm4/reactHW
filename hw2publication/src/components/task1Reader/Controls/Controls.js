import React from 'react';
import PropTypes from 'prop-types';
import style from './Controls.module.css';

const Controls = ({
  items,
  elNumber,
  onHandleIncrement,
  onHandleDecrement,
}) => {
  return (
    <div className={style.controls}>
      <button
        className={elNumber === 1 ? style.disabled : style.button}
        onClick={onHandleDecrement}
        type="button"
      >
        PREV
      </button>
      <button
        className={elNumber === items.length ? style.disabled : style.button}
        onClick={onHandleIncrement}
        type="button"
      >
        NEXT
      </button>
    </div>
  );
};

Controls.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  elNumber: PropTypes.number.isRequired,
  onHandleIncrement: PropTypes.func.isRequired,
  onHandleDecrement: PropTypes.func.isRequired,
};

export default Controls;
