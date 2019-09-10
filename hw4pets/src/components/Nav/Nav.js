import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const activeStyle = { color: 'yellow' };

const Nav = () => {
  return (
    <ul className={style.navigation}>
      <li className={style.item}>
        <NavLink exact activeStyle={activeStyle} className={style.a} to="/">
          Home page
        </NavLink>
      </li>
      <li className={style.item}>
        <NavLink activeClassName={style.active} className={style.a} to="/about">
          About page
        </NavLink>
      </li>
      <li className={style.item}>
        <NavLink activeClassName={style.active} className={style.a} to="/pets">
          Pets
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
