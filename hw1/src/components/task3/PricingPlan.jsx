import React from 'react';
// import PropTypes from 'prop-types';
import style from './PriсingPlan.module.css';
// import items from './priceList.json';
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
export default PricingPlan;
