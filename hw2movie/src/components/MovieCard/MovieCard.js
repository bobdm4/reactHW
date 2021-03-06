import React from 'react';
import PropTypes from 'prop-types';

import style from './MovieCard.module.css';

const MovieCard = ({ items }) => (
  <>
    {items.map(item => (
      <div key={item.id} className={style.movieCard}>
        <img src={item.posterUrl} alt={item.title} />
        <div className={style.content}>
          <h2 className={style.title}>{item.title}</h2>
          <p className={style.descr}>{item.overview}</p>
        </div>
      </div>
    ))}
  </>
);

MovieCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieCard;
