import { useHistory, useParams } from 'react-router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions, productSelectors } from '../../store/product';
import { Spinner } from '../../componets/Spinner';
import { ProductForm } from '../../componets/ProductForm';
import {
  ProductFormCancelCb,
  ProductFormSubmitCb,
} from '../../componets/ProductForm/types';
import { ProductEntityType } from '../../types/products';
import { setRedirectToProductList } from '../../store/product/actions';
import { getRedirectToProductList } from '../../store/product/selectors';
import { getPathByName } from '../../router';
import { ENTITY_FORM_NEW_ID } from '../../config/app';

export const Product = () => {
  const id = useParams<{ id: string }>().id;
  const dispatch = useDispatch();
  const error = useSelector(productSelectors.getError);
  const product = useSelector(productSelectors.getProduct);
  const isLoading = useSelector(productSelectors.getIsLoading);
  const redirectToProductList = useSelector(getRedirectToProductList);
  const history = useHistory();

  useEffect(() => {
    if (id !== ENTITY_FORM_NEW_ID) {
      dispatch(productActions.getProduct(Number(id)));
    }
    return () => {
      dispatch(productActions.setError(null));
      dispatch(productActions.setProduct(null));
      dispatch(setRedirectToProductList(false));
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (redirectToProductList) {
      const path = getPathByName('products');
      history.push(path);
    }
  }, [redirectToProductList, history]);

  const submitCb: ProductFormSubmitCb = (values: ProductEntityType) => {
    if (id === ENTITY_FORM_NEW_ID) {
      dispatch(productActions.addProduct(values));
    } else {
      dispatch(productActions.updateProduct(values));
    }
  };

  const cancelCb: ProductFormCancelCb = () => {
    const path = getPathByName('products');
    history.push(path);
  };

  return (
    <div className="d-flex flex-grow-1 flex-column app__transition-opacity">
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
        {isLoading ? <Spinner /> : null}
        <fieldset disabled={isLoading}>
          <ProductForm
            submitCb={submitCb}
            cancelCb={cancelCb}
            initialValues={product}
          />
        </fieldset>
      </div>
    </div>
  );
};
