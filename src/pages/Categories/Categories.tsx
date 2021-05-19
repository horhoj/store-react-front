import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesActions, categoriesSelectors } from '../../store/categories';
import { CategoriesFormVisibleFields } from '../../api/entity/categories/types';
import { DataTable } from '../../componets/DataTable';
import {
  DataTableAddBtnClkCb,
  DataTableChangePerPageCb,
  DataTableColumnClkCb,
  DataTableGoToPageBtnClkCb,
  DataTableRowActionBtnClkCb,
  DataTableSearchCb,
  DataTableUpdateBtnClkCb,
} from '../../componets/DataTable/types';
import { getPathByName } from '../../router';
import { generatePath, useHistory } from 'react-router';
import { ENTITY_FORM_NEW_ID } from '../../config/app';

export const Categories: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoriesActions.getCategories({}));
  }, [dispatch]);

  const isLoading = useSelector(categoriesSelectors.getIsLoading);
  const error = useSelector(categoriesSelectors.getError);
  const categories = useSelector(categoriesSelectors.getCategories);
  const currentRequestConfig = useSelector(
    categoriesSelectors.getRequestConfig,
  );
  const history = useHistory();

  const categoriesVisibleFields: CategoriesFormVisibleFields[] = [
    { name: 'id', title: 'ИД' },
    { name: 'title', title: 'Наименование' },
    { name: 'description', title: 'Описание' },
  ];

  const columnClkCb: DataTableColumnClkCb = (fieldName: string) => {
    if (currentRequestConfig.sort_field === fieldName) {
      dispatch(
        categoriesActions.getCategories({
          sort_asc: currentRequestConfig.sort_asc === 1 ? 0 : 1,
        }),
      );
    } else {
      dispatch(
        categoriesActions.getCategories({
          sort_asc: 1,
          sort_field: fieldName,
        }),
      );
    }
  };

  const changePerPageCb: DataTableChangePerPageCb = (perPage: number) => {
    dispatch(
      categoriesActions.getCategories({
        per_page: perPage,
      }),
    );
  };

  const addBtnClkCb: DataTableAddBtnClkCb = () => {
    const pathTemplate: string = getPathByName('category');
    const path: string = generatePath(pathTemplate, { id: ENTITY_FORM_NEW_ID });
    history.push(path);
  };

  const actionCb: DataTableRowActionBtnClkCb = ({ id, type }) => {
    if (type === 'edit') {
      const pathTemplate: string = getPathByName('category');
      const path: string = generatePath(pathTemplate, { id });
      history.push(path);
    } else if (type === 'delete') {
      dispatch(categoriesActions.deleteCategory(id));
    }
  };

  const updateBtnClkCb: DataTableUpdateBtnClkCb = () => {
    dispatch(categoriesActions.getCategories({}));
  };

  const searchCb: DataTableSearchCb = (findStr: string) => {
    dispatch(
      categoriesActions.getCategories({
        page: 1,
        sort_asc: 1,
        search: findStr,
        sort_field: 'title',
      }),
    );
  };

  const goToPageBtnClkCb: DataTableGoToPageBtnClkCb = (page: number) => {
    dispatch(
      categoriesActions.getCategories({
        page,
      }),
    );
  };

  return (
    <div className=" d-flex flex-grow-1 flex-column">
      <h4>Категории</h4>
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
            isLoading={isLoading}
            items={categories?.data}
            perPage={currentRequestConfig.per_page}
            sortAsc={currentRequestConfig.sort_asc}
            sortField={currentRequestConfig.sort_field}
            currentPage={categories?.current_page}
            lastPage={categories?.last_page}
            visibleFields={categoriesVisibleFields}
            findStr={currentRequestConfig.search}
            changePerPageCb={changePerPageCb}
            addBtnClkCb={addBtnClkCb}
            columnClkCb={columnClkCb}
            actionCb={actionCb}
            updateBtnClkCb={updateBtnClkCb}
            searchCb={searchCb}
            goToPageBtnClkCb={goToPageBtnClkCb}
          />
        </div>
      </div>
    </div>
  );
};
