import React from 'react';
import { Link } from 'react-router-dom';
import { getPathByName } from '../../router';
import styles from './styles.module.scss';

export const PrivateMenu: React.FC = () => {
  return (
    <div className={`p-2 ${styles.mainMenu}`}>
      <div>
        <Link to={getPathByName('home')}>Home</Link>
      </div>
      <div>
        <Link to={getPathByName('about')}>About</Link>
      </div>
    </div>
  );
};
