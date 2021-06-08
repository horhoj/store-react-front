import React from 'react';
import { NavLink } from 'react-router-dom';
import { getPathByName } from '../../router';
import styles from './styles.module.scss';

export const PrivateMenu: React.FC = () => {
  return (
    <div className={`p-2 ${styles.mainMenu}`}>
      <div>
        <NavLink exact={true} to={getPathByName('home')}>
          Главная
        </NavLink>
      </div>
      <div>
        <NavLink to={getPathByName('products')}>Товары</NavLink>
      </div>
      <div>
        <NavLink to={getPathByName('categories')}>Категории</NavLink>
      </div>
    </div>
  );
};
