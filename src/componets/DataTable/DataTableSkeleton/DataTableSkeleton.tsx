import React from 'react';
import styles from './style.module.scss';
import { DataTableSkeletonProps } from './types';

export const DataTableSkeleton: React.FC<DataTableSkeletonProps> = ({
  height,
  width,
}) => {
  return (
    <div style={{ width, height }} className="d-flex flex-column">
      <div
        className={`border rounded-lg mb-3 ${styles.skeleton} ${styles.skeletonHeader}`}
      />
      <div className={`border rounded-lg flex-grow-1 ${styles.skeleton}`} />
    </div>
  );
};
