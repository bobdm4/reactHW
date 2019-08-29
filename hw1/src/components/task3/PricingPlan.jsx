import React from 'react';
import PropTypes from 'prop-types';
import style from './PriсingPlan.module.css';
import PricingItem from './PricingItem/PricingItem';

const PricingPlan = ({ items }) => (
  <ul className={style.pricingPlan}>
    {items.map(item => (
      <li key={item.label} className={style.item}>
        <PricingItem item={item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
