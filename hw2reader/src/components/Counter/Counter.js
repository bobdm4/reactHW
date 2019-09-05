import React from 'react';
import PropTypes from 'prop-types';

import Controls from '../Controls/Controls';
import style from './Counter.module.css';

const Counter = ({ items, elNumber, onHandleIncrement, onHandleDecrement }) => {
  return (
    <div className={style.counter}>
      <span>
        {elNumber}/{items.length}
      </span>
      <Controls
        items={items}
        elNumber={elNumber}
        onHandleIncrement={onHandleIncrement}
        onHandleDecrement={onHandleDecrement}
      />
    </div>
  );
};

Counter.propTypes = {
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

export default Counter;
