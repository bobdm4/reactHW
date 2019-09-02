import React from 'react';
import PropTypes from 'prop-types';

import Controls from './Controls';
import style from './Reader.module.css';

const Counter = ({ items, elNumber, onHandleIncrement, onHandleDecrement }) => {
  // const { value } = this.state;
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
  items: PropTypes.array.isRequired,
  elNumber: PropTypes.number.isRequired,
  onHandleIncrement: PropTypes.func.isRequired,
  onHandleDecrement: PropTypes.func.isRequired,
};

export default Counter;
