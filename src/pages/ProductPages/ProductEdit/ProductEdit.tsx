import { useHistory, useParams } from 'react-router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions, productSelectors } from '../../../store/product';
import { Spinner } from '../../../componets/Spinner';
import { ProductForm } from '../../../componets/ProductForm';
import {
  ProductFormCancelCb,
  ProductFormSubmitCb,
} from '../../../componets/ProductForm/types';
import { ProductEntityType } from '../../../types/product';
import { getPathByName } from '../../../router';
import { SERVER_NOT_RESPONDING } from '../../../config/API';

export const ProductEdit: React.FC = () => {
  const id = useParams<{ id: string }>().id;
  const dispatch = useDispatch();
  const error = useSelector(productSelectors.getError);
  const product = useSelector(productSelectors.getProduct);
  const isLoading = useSelector(productSelectors.getIsLoading);
  const redirectToProductList = useSelector(
    productSelectors.getRedirectToProductList,
  );
  const history = useHistory();

  useEffect(() => {
    dispatch(productActions.getProduct(Number(id)));
    return () => {
      dispatch(productActions.clear());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (redirectToProductList) {
      const path = getPathByName('products');
      history.push(path);
    }
  }, [redirectToProductList, history]);

  const submitCb: ProductFormSubmitCb = (values: ProductEntityType) => {
    dispatch(productActions.updateProduct(values));
  };

  const cancelCb: ProductFormCancelCb = () => {
    const path = getPathByName('products');
    history.push(path);
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
      <h5>Редактируется товар с ИД: {id}</h5>
      {error !== null ? (
        <div className="alert alert-danger">
          <h5>Ошибка!</h5>
          <div>
            {error === SERVER_NOT_RESPONDING
              ? 'Не удалось подключится к серверу'
              : error === 404
              ? `не удалось найти данные по ИД: ${id}!`
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
