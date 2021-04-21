import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions, productsSelectors } from '../../store/products';
import { Spinner } from '../../componets/Spinner';

export const Products: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.getProducts);
  const error = useSelector(productsSelectors.getError);
  const isLoading = useSelector(productsSelectors.getIsLoading);

  const clearError = () => {
    dispatch(productsActions.setError(null));
    dispatch(productsActions.setProducts(null));
  };

  const getProducts = () => {
    dispatch(productsActions.getProducts());
  };

  useEffect(() => {
    getProducts();
    return () => clearError();
  }, []);

  const updateProductsHandle = () => {
    dispatch(productsActions.getProducts());
  };

  return (
    <div className="position-relative d-flex flex-grow-1 flex-column">
      <h4>Товары</h4>
      {isLoading ? <Spinner parentComponentCenterPosition={true} /> : ''}
      {error !== null ? (
        <div className="alert alert-danger">
          <h5>Не удалось загрузить данные по товарам</h5>
          <div>
            {error === 0
              ? 'Не удалось подключится к серверу'
              : `ошибка с кодом ${error}`}
          </div>
        </div>
      ) : (
        ''
      )}
      <div>
        <div>
          <button
            className="btn btn-primary btn-sm"
            onClick={updateProductsHandle}
          >
            Обновить
          </button>
        </div>
        <pre>
          {products
            ? products.data.map((item, index) => (
                <div className="d-flex" key={item.id}>
                  <div>{item.title}</div> | <div>{item.description}</div>
                </div>
              ))
            : ''}
        </pre>
      </div>
    </div>
  );
};
