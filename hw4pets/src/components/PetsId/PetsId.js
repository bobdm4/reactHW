import React from 'react';
import { Link } from 'react-router-dom';
import style from './PetsId.module.css';

const PetsId = ({ items }) => {
  return (
    <ul className={style.itemList}>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/pets/${item.id}`} className={style.link}>
            <div className={style.item}>
              <img className={style.img} src={item.image} alt={item.breed} />
              <h3>Name: {item.name} </h3>
              <span>gender: {item.gender}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PetsId;
