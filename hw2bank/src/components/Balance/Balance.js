import React from 'react';
import PropTypes from 'prop-types';

import style from './Balance.module.css';

const Balance = ({ balance, balanceInc, balanceDec }) => (
  <>
    <section className={style.balance}>
      <span role="img" aria-label="inc">
        ⬆️{balanceInc}$
      </span>
      <span role="img" aria-label="dec">
        ⬇️{balanceDec}$
      </span>
      <span>Balance: {balance}$</span>
    </section>
  </>
);
Balance.propTypes = {
  balance: PropTypes.string.isRequired,
  balanceInc: PropTypes.func.isRequired,
  balanceDec: PropTypes.func.isRequired,
};
export default Balance;
