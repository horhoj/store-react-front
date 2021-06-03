import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generatePath } from 'react-router';
import { productsActions, productsSelectors } from '../../../store/products';
import { DataTable } from '../../../componets/DataTable';
import {
  DataTableAddBtnClkCb,
  DataTableChangePerPageCb,
  DataTableGoToPageBtnClkCb,
  DataTableRowActionBtnClkCb,
  DataTableSearchCb,
} from '../../../componets/DataTable/types';
import { getPathByName } from '../../../router';
import { ProductsFormVisibleFields } from '../../../api/entity/products/types';
import { appActions } from '../../../store/app';

export const Products: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.getProducts);
  const error = useSelector(productsSelectors.getError);
  const isLoading = useSelector(productsSelectors.getIsLoading);
  const currentRequestConfig = useSelector(productsSelectors.getRequestConfig);

  const productsVisibleFields: ProductsFormVisibleFields[] = [
    { name: 'id', title: 'ИД' },
    { name: 'title', title: 'Наименование' },
    { name: 'description', title: 'Описание' },
    { name: 'options', title: 'Параметры' },
  ];

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

  const rowActionBtnClkCb: DataTableRowActionBtnClkCb = ({ id, type }) => {
    if (type === 'edit') {
      const pathTemplate: string = getPathByName('productEdit');
      const path: string = generatePath(pathTemplate, { id });
      dispatch(appActions.redirectToPath(path));
    } else if (type === 'delete') {
      dispatch(productsActions.deleteProduct(id));
    }
  };

  const goToPageBtnClkCb: DataTableGoToPageBtnClkCb = (id: number) => {
    dispatch(
      productsActions.getProducts({
        page: id,
      }),
    );
  };

  const searchCb: DataTableSearchCb = (findStr: string) => {
    dispatch(
      productsActions.getProducts({
        page: 1,
        sort_asc: 1,
        search: findStr,
        sort_field: 'title',
      }),
    );
  };

  const changePerPageCb: DataTableChangePerPageCb = (perPage: number) => {
    dispatch(
      productsActions.getProducts({
        page: 1,
        sort_asc: 1,
        sort_field: 'title',
        per_page: perPage,
      }),
    );
  };

  useEffect(() => {
    dispatch(productsActions.getProducts({}));
    return () => {
      dispatch(productsActions.setError(null));
    };
  }, [dispatch]);

  const updateProductsHandle = () => {
    dispatch(productsActions.getProducts({}));
  };

  const addBtnClkCb: DataTableAddBtnClkCb = () => {
    const path: string = getPathByName('productNew');
    dispatch(appActions.redirectToPath(path));
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
      ) : null}
      <div>
        <div className="mt-3">
          <DataTable
            items={products?.data}
            visibleFields={productsVisibleFields}
            isLoading={isLoading}
            columnClkCb={columnClkCb}
            sortField={currentRequestConfig.sort_field}
            sortAsc={currentRequestConfig.sort_asc}
            actionCb={rowActionBtnClkCb}
            currentPage={products?.current_page}
            lastPage={products?.last_page}
            goToPageBtnClkCb={goToPageBtnClkCb}
            perPage={products?.per_page}
            updateBtnClkCb={updateProductsHandle}
            searchCb={searchCb}
            findStr={currentRequestConfig.search}
            changePerPageCb={changePerPageCb}
            addBtnClkCb={addBtnClkCb}
            showDeleteAction={true}
            showSelectAction={false}
            showEditAction={true}
            showAddAction={true}
          />
        </div>
      </div>
    </div>
  );
};
