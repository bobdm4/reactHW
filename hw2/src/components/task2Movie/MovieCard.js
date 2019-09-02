import React from 'react';
import style from './styles.module.css';

const MovieCard = ({ items }) => (
  <>
    {items.map(item => (
      <div className={style.movieCard}>
        <img src={item.posterUrl} alt={item.title} />
        <div className={style.content}>
          <h2 className={style.title}>{item.title}</h2>
          <p className={style.descr}>{item.overview}</p>
        </div>
      </div>
    ))}
  </>
);

export default MovieCard;
