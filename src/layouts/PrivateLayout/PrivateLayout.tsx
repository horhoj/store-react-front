import React from 'react';
import { useSelector } from 'react-redux';
import { PrivateFooter } from '../PrivateFooter';
import { PrivateMenu } from '../PrivateMenu';
import { PrivateHeader } from '../PrivateHeader';
import { appSelectors } from '../../store/app';
import styles from './styles.module.scss';

export const PrivateLayout: React.FC = ({ children }) => {
  const isAlternateMenuMode = useSelector(appSelectors.getIsAlternateMenuMode);
  return (
    <div className="d-flex flex-grow-1 flex-column bg-white">
      <header className="d-flex">
        <PrivateHeader />
      </header>
      <div className="d-flex flex-grow-1">
        <div
          className={`d-flex ${styles.mainMenu} ${
            isAlternateMenuMode ? styles.mainMenuAlternateMode : ''
          }`}
        >
          <PrivateMenu />
        </div>
        <main className="p-2 d-flex flex-grow-1">{children}</main>
      </div>
      <div className="d-flex">
        <PrivateFooter />
      </div>
    </div>
  );
};
