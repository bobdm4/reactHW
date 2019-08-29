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

// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
// }
export default Stat;
