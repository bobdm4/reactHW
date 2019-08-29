import React from 'react';
import PropTypes from 'prop-types';
import style from './Stat.module.css';

const Stat = ({ title, stats }) => (
  <section className={style.statsSection}>
    <h2 className={style.title}>{title}</h2>

    <ul className={style.statList}>
      {stats.map(item => (
        <li key={item.id} className={style.item}>
          <span className={style.label}>{item.label}</span>
          <span className={style.percentage}>{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Stat.defaultProps = {
  title: 'Upload stats',
};

Stat.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Stat;
