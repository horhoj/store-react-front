import React from 'react';
import styled, { css } from 'styled-components';
import { DataTableSkeletonProps } from './types';

const commonSkeletonStyle = css`
  display: block;
  background-color: rgba(0, 0, 0, 0.11);
  animation: MuiSkeletonKeyframesPulse 1.5s ease-in-out 0.5s infinite;

  @keyframes MuiSkeletonKeyframesPulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Skeleton = styled.div`
  ${commonSkeletonStyle}
`;

const SkeletonHeader = styled.div`
  height: 80px;
  width: 220px;
  ${commonSkeletonStyle}
`;

export const DataTableSkeleton: React.FC<DataTableSkeletonProps> = ({
  height,
  width,
}) => {
  return (
    <div style={{ width, height }} className="d-flex flex-column">
      <SkeletonHeader className={`border rounded-lg mb-3`} />
      <Skeleton className={`border rounded-lg flex-grow-1`} />
    </div>
  );
};
