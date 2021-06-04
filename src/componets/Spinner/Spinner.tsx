import React from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../store/user';
import { authSelectors } from '../../store/auth';
import { categoriesSelectors } from '../../store/categories';
import { categorySelectors } from '../../store/category';
import { productsSelectors } from '../../store/products';
import { productSelectors } from '../../store/product';
import styles from './Spinner.module.scss';
import { SpinnerProps } from './types';

export const Spinner: React.FC<SpinnerProps> = () => {
  const user = useSelector(userSelectors.getIsLoading);
  const auth = useSelector(authSelectors.getIsLoading);
  const categories = useSelector(categoriesSelectors.getIsLoading);
  const category = useSelector(categorySelectors.getIsLoading);
  const products = useSelector(productsSelectors.getIsLoading);
  const product = useSelector(productSelectors.getIsLoading);

  const isLoading =
    user || auth || categories || category || products || product;

  return isLoading ? <div className={styles.Spinner} /> : null;
};
