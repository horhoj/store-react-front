import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions, productsSelectors } from '../../store/products';
import { DataTable } from '../../componets/DataTable';
import { DataTableVisibleField } from '../../componets/DataTable/types';

export const Products: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.getProducts);
  const error = useSelector(productsSelectors.getError);
  const isLoading = useSelector(productsSelectors.getIsLoading);
  const currentRequestConfig = useSelector(productsSelectors.getRequestConfig);

  const productsVisibleFields: DataTableVisibleField[] = [
    { name: 'id', title: 'ИД' },
    { name: 'title', title: 'Наименование' },
    { name: 'description', title: 'Описание' },
    { name: 'params', title: 'Параметры' },
  ];

  const clear = () => {
    dispatch(productsActions.setError(null));
    dispatch(productsActions.setProducts(null));
  };

  const getProducts = () => {
    dispatch(productsActions.getProducts({}));
  };

  const columnClkCb = (fieldName: string) => {
    if (currentRequestConfig.sort_field === fieldName) {
      dispatch(
        productsActions.getProducts({
          sort_asc: currentRequestConfig.sort_asc === 1 ? 0 : 1,
        }),
      );
    } else {
      dispatch(
        productsActions.getProducts({
          sort_asc: 1,
          sort_field: fieldName,
        }),
      );
    }
  };

  useEffect(() => {
    getProducts();
    return () => clear();
    // eslint-disable-next-line
  }, []);

  const updateProductsHandle = () => {
    getProducts();
  };

  return (
    <div className=" d-flex flex-grow-1 flex-column">
      <h4>Товары</h4>
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
        <div className="mt-3">
          <DataTable
            items={products?.data}
            visibleFields={productsVisibleFields}
            isLoading={isLoading}
            columnClkCb={columnClkCb}
            sortField={currentRequestConfig.sort_field}
            sortAsc={currentRequestConfig.sort_asc}
          />
        </div>
      </div>
    </div>
  );
};
