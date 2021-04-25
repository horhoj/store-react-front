import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions, productSelectors } from '../../store/product';

export const Product = () => {
  const id = useParams<{ id: string }>().id;
  const dispatch = useDispatch();
  const error = useSelector(productSelectors.getError);
  const product = useSelector(productSelectors.getProduct);
  const isLoading = useSelector(productSelectors.getIsLoading);

  useEffect(() => {
    dispatch(productActions.getProduct(Number(id)));
  }, []);

  return (
    <pre>
      <div>Product {JSON.stringify(id)}</div>
      <div>Product {JSON.stringify(isLoading, null, 2)}</div>
      <br />
      <br />
      <br />
      <div>Product {JSON.stringify(error, null, 2)}</div>
      <br />
      <br />
      <br />
      <div>Product {JSON.stringify(product, null, 2)}</div>
    </pre>
  );
};
