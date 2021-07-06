import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { userSelectors } from '../../store/user';
import { authSelectors } from '../../store/auth';
import { categoriesSelectors } from '../../store/categories';
import { categorySelectors } from '../../store/category';
import { productsSelectors } from '../../store/products';
import { productSelectors } from '../../store/product';
import { SpinnerProps } from './types';

const SpinnerStyledComponent = styled.div`
  z-index: 4000;
  position: fixed;
  top: 0;
  left: 0;
  animation: progressBar 0.8s linear 0s infinite;
  background: lightskyblue
    linear-gradient(
      315deg,
      transparent,
      transparent 33%,
      rgba(0, 0, 0, 0.3) 33%,
      rgba(0, 0, 0, 0.3) 66%,
      transparent 66%,
      transparent
    )
    repeat-x scroll;
  background-size: 16px 8px;
  bottom: 0;
  height: 8px;
  margin-bottom: -5px;
  width: 100%;

  @keyframes progressBar {
    0% {
      background-position: 0 0;
    }
    to {
      background-position: 64px 0;
    }
  }
`;

export const Spinner: React.FC<SpinnerProps> = () => {
  const user = useSelector(userSelectors.getIsLoading);
  const auth = useSelector(authSelectors.getIsLoading);
  const categories = useSelector(categoriesSelectors.getIsLoading);
  const category = useSelector(categorySelectors.getIsLoading);
  const products = useSelector(productsSelectors.getIsLoading);
  const product = useSelector(productSelectors.getIsLoading);

  const isLoading =
    user || auth || categories || category || products || product;

  return isLoading ? <SpinnerStyledComponent /> : null;
};
