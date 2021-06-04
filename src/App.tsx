import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoutesStructure } from './router';
import { userActions, userSelectors } from './store/user';
import { Spinner } from './componets/Spinner';

export const App: React.FC = () => {
  const isLoading = useSelector(userSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getData());
  }, [dispatch]);

  return (
    <div className="d-flex min-vh-100">
      <Spinner />
      {isLoading ? null : <RoutesStructure />}
    </div>
  );
};
