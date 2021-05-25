import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions, categorySelectors } from '../../../store/category';
import { getPathByName } from '../../../router';
import { CategoryEntityType } from '../../../types/category';
import { CategoryForm } from '../../../componets/CategoryForm';
import { SERVER_NOT_RESPONDING } from '../../../config/API';
import { Spinner } from '../../../componets/Spinner';

export const CategoryNew: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(categorySelectors.getIsLoading);
  const category = useSelector(categorySelectors.getCategory);
  const history = useHistory();
  const error = useSelector(categorySelectors.getError);
  const redirectToCategoryList = useSelector(
    categorySelectors.getRedirectToCategoryList,
  );

  useEffect(() => {
    return () => {
      dispatch(categoryActions.clear());
    };
  }, [dispatch]);

  useEffect(() => {
    if (redirectToCategoryList) {
      const path = getPathByName('categories');
      history.push(path);
    }
  }, [redirectToCategoryList, history]);

  const submitCb = (values: CategoryEntityType) => {
    dispatch(categoryActions.addCategory(values));
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
        {error !== 404 && error !== SERVER_NOT_RESPONDING ? categoryForm : null}
      </fieldset>
    </div>
  );
};
