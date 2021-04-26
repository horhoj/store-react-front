import { useHistory, useParams } from 'react-router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions, productSelectors } from '../../store/product';
import { Spinner } from '../../componets/Spinner';
import { ProductForm } from '../../componets/ProductForm';
import { ProductFormSubmitCb } from '../../componets/ProductForm/types';
import { ProductEntityType } from '../../types/products';
import { setRedirectToProductList } from '../../store/product/actions';
import { getRedirectToProductList } from '../../store/product/selectors';
import { getPathByName } from '../../router';

export const Product = () => {
  const id = useParams<{ id: string }>().id;
  const dispatch = useDispatch();
  const error = useSelector(productSelectors.getError);
  const product = useSelector(productSelectors.getProduct);
  const isLoading = useSelector(productSelectors.getIsLoading);
  const redirectToProductList = useSelector(getRedirectToProductList);
  const history = useHistory();

  useEffect(() => {
    dispatch(productActions.getProduct(Number(id)));
    return () => {
      dispatch(productActions.setError(null));
      dispatch(productActions.setProduct(null));
      dispatch(setRedirectToProductList(false));
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (redirectToProductList) {
      const path = getPathByName('products');
      history.push(path);
    }
  }, [redirectToProductList]);

  const submitCb: ProductFormSubmitCb = (values: ProductEntityType) => {
    dispatch(productActions.updateProduct(values));
  };

  return (
    <div className="d-flex flex-grow-1 flex-column">
      <h5>Редактируется товар с ИД: {id}</h5>
      {error !== null ? (
        <div className="alert alert-danger">
          <h5>Ошибка!</h5>
          <div>
            {error === 0
              ? 'Не удалось подключится к серверу'
              : error === 404
              ? `не удалось найти данные по ИД: ${id}!`
              : `ошибка с кодом ${error}`}
          </div>
        </div>
      ) : null}
      <div className="position-relative">
        {isLoading ? <Spinner parentComponentCenterPosition={true} /> : null}
        {product ? (
          <ProductForm initialValues={product} submitCb={submitCb} />
        ) : null}
      </div>
    </div>
  );
};
