import React from 'react';
import styles from './Spinner.module.scss';
import { SpinnerProps } from './types';

const Spinner: React.FC<SpinnerProps> = ({
  parentComponentCenterPosition = false,
}): JSX.Element => {
  const loader = (
    <svg className={styles.loader} viewBox="0 0 24 24">
      <circle className={styles.loader__value} cx="12" cy="12" r="10" />
      <circle className={styles.loader__value} cx="12" cy="12" r="10" />
      <circle className={styles.loader__value} cx="12" cy="12" r="10" />
      <circle className={styles.loader__value} cx="12" cy="12" r="10" />
      <circle className={styles.loader__value} cx="12" cy="12" r="10" />
      <circle className={styles.loader__value} cx="12" cy="12" r="10" />
    </svg>
  );
  return parentComponentCenterPosition ? (
    <div className={`position-absolute w-100 h-100 ${styles.Spinner}`}>
      <div
        className={
          'd-flex justify-content-center m-auto w-100 h-100 align-items-center'
        }
      >
        {loader}
      </div>
    </div>
  ) : (
    loader
  );
};

export default Spinner;
