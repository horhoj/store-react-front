import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryForm } from '../../../componets/CategoryForm';
import { categoryActions, categorySelectors } from '../../../store/category';
import { getPathByName } from '../../../router';
import { CategoryEntityType } from '../../../types/category';
import { Spinner } from '../../../componets/Spinner';
import { SERVER_NOT_RESPONDING } from '../../../config/API';

export const CategoryEdit: React.FC = () => {
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
    dispatch(categoryActions.getCategory(Number(id)));
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
    dispatch(categoryActions.updateCategory(values));
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
      <h5>Редактируется категория с ИД: {id}</h5>
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
        {error !== 404 && error !== SERVER_NOT_RESPONDING ? categoryForm : null}
      </fieldset>
    </div>
  );
};
