import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { CategoryForm } from '../../componets/CategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions, categorySelectors } from '../../store/category';
import { getPathByName } from '../../router';
import { CategoryEntityType } from '../../types/categories';
import { ENTITY_FORM_NEW_ID } from '../../config/app';
import { Spinner } from '../../componets/Spinner';

export const Category: React.FC = () => {
  const id = useParams<{ id: string }>().id;
  const dispatch = useDispatch();
  const isLoading = useSelector(categorySelectors.getIsLoading);
  const category = useSelector(categorySelectors.getCategory);
  const history = useHistory();
  const error = useSelector(categorySelectors.getError);
  const redirectToCategoryList = useSelector(
    categorySelectors.getRedirectToCategoryList,
  );

  useEffect(() => {
    if (id !== ENTITY_FORM_NEW_ID) {
      dispatch(categoryActions.getCategory(Number(id)));
    }
    return () => {
      dispatch(categoryActions.clear());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (redirectToCategoryList) {
      const path = getPathByName('categories');
      history.push(path);
    }
  }, [redirectToCategoryList, history]);

  const submitCb = (values: CategoryEntityType) => {
    if (id === ENTITY_FORM_NEW_ID) {
      dispatch(categoryActions.addCategory(values));
    } else {
      dispatch(categoryActions.updateCategory(values));
    }
  };

  const cancelCb = () => {
    const path = getPathByName('categories');
    history.push(path);
  };

  const categoryForm = (
    <CategoryForm
      initialValues={category}
      submitCb={submitCb}
      cancelCb={cancelCb}
    />
  );

  return (
    <div>
      {id === ENTITY_FORM_NEW_ID ? (
        <h5>Добавление категории</h5>
      ) : (
        <h5>Редактируется категория с ИД: {id}</h5>
      )}
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
      {isLoading ? <Spinner /> : null}
      <fieldset disabled={isLoading}>
        {id === ENTITY_FORM_NEW_ID
          ? categoryForm
          : error !== 404
          ? categoryForm
          : null}
      </fieldset>
    </div>
  );
};
