import React from 'react';
import PropTypes from 'prop-types';

import style from './TransactionHistory.module.css';

const TransactionHistory = ({ transHist }) => (
  <>
    <table className={style.history}>
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transHist.map(trans => (
          <tr key={trans.id}>
            <td>{trans.type}</td>
            <td>{trans.amount}$</td>
            <td>{trans.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

TransactionHistory.propTypes = {
  transHist: PropTypes.arrayOf.shape(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TransactionHistory;
