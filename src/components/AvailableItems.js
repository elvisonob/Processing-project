import React, { useState } from 'react';
import classes from './AvailableItems.module.css';
import mango from './../Images/mango.webp';
import orange from './../Images/orange.jpg';
import potatoes from './../Images/potatoes.jpg';
import rice from './../Images/rice.jpg';

const items = [
  {
    id: 'm1',
    name: 'mango',
    image: mango,
    price: 8.9,
    useByDate: new Date(2024, 6, 25),
  },

  {
    id: 'm2',
    name: 'Orange',
    image: orange,
    price: 7.1,
    useByDate: new Date(2025, 0, 13),
  },

  {
    id: 'm3',
    name: 'Rice',
    image: rice,
    price: 3.4,
    useByDate: new Date(2026, 1, 15),
  },

  {
    id: 'm4',
    name: 'Potatoes',
    image: potatoes,
    price: 4.2,
    useByDate: new Date(2027, 5, 20),
  },
];

const AvailableItems = (props) => {
  const { onAddItem } = props;
  return (
    <div className={classes['items-container']}>
      <ul>
        {items.map((item) => {
          return (
            <div className={classes['list-items']} key={item.id}>
              <h2>{item.name}</h2>
              <li>
                <img alt="images" width="50%" height="50%" />
              </li>
              <li className={classes['edit-list']}>
                <div className={classes['list-price']}>
                  £{item.price}
                  <div>Used By: {item.useByDate.getFullYear()}</div>
                </div>

                <button onClick={() => onAddItem(item)}>Add to Cart</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AvailableItems;
