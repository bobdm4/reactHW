import React from 'react';
import PropTypes from 'prop-types';
import style from './PriсingItem.module.css';

const PricingItem = ({ item }) => (
  <div className={style.pricingItem}>
    <i className={style.icon} src={item.icon} />
    <h2 className={style.label}>{item.label}</h2>
    <p className={style.capacity}>{item.capacity} Storage</p>
    <p className={style.description}>{item.description}</p>
    <p className={style.price}>${item.price}/MO</p>
    <button type="button" className={style.button}>
      Get Started
    </button>
  </div>
);
PricingItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default PricingItem;
