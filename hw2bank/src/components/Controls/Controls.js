import React from 'react';
import PropTypes from 'prop-types';

import style from './Controls.module.css';

const Controls = ({ amount, onChange, typeBtn }) => {
  return (
    <section className={style.controls}>
      <input
        name="amount"
        type="number"
        value={amount}
        onChange={onChange}
        placeholder="Enter amount..."
      />
      <button name="deposit" onClick={typeBtn} type="button">
        Deposit
      </button>
      <button name="withdraw" onClick={typeBtn} type="button">
        Withdraw
      </button>
    </section>
  );
};

Controls.propTypes = {
  amount: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  typeBtn: PropTypes.func.isRequired,
};

export default Controls;
