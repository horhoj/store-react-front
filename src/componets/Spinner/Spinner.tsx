import React from 'react';
import styles from './Spinner.module.scss';
import { SpinnerProps } from './types';

export const Spinner: React.FC<SpinnerProps> = () => {
  return <div className={styles.Spinner} />;
};
