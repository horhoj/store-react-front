import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions, productSelectors } from '../../../store/product';
import { getPathByName } from '../../../router';
import {
  ProductFormCancelCb,
  ProductFormSubmitCb,
} from '../../../componets/ProductForm/types';
import { ProductEntityType } from '../../../types/product';
import { ProductForm } from '../../../componets/ProductForm';
import { SERVER_NOT_RESPONDING } from '../../../config/API';
import { Spinner } from '../../../componets/Spinner';
import { appActions } from '../../../store/app';

export const ProductNew: React.FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(productSelectors.getError);
  const product = useSelector(productSelectors.getProduct);
  const isLoading = useSelector(productSelectors.getIsLoading);

  useEffect(() => {
    return () => {
      dispatch(productActions.clear());
    };
  }, [dispatch]);

  const submitCb: ProductFormSubmitCb = (values: ProductEntityType) => {
    dispatch(productActions.addProduct(values));
  };

  const cancelCb: ProductFormCancelCb = () => {
    const path = getPathByName('products');
    dispatch(appActions.redirectToPath(path));
  };

  const productForm = (
    <ProductForm
      submitCb={submitCb}
      cancelCb={cancelCb}
      initialValues={product}
    />
  );

  return (
    <div className="d-flex flex-grow-1 flex-column app__transition-opacity">
      <h5>Добавление нового товара</h5>
      {error !== null ? (
        <div className="alert alert-danger">
          <h5>Ошибка!</h5>
          <div>
            {error === SERVER_NOT_RESPONDING
              ? 'Не удалось подключится к серверу'
              : `ошибка с кодом ${error}`}
          </div>
        </div>
      ) : null}
      {isLoading ? <Spinner /> : null}
      <fieldset disabled={isLoading}>
        {error !== 404 && error !== SERVER_NOT_RESPONDING ? productForm : null}
      </fieldset>
    </div>
  );
};
