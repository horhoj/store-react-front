import React, { useEffect } from 'react';
import { RoutesStructure } from './router';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, userSelectors } from './store/user';
import { Spinner } from './componets/Spinner';

export const App: React.FC = () => {
  const isLoading = useSelector(userSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getData());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="d-flex min-vh-100">
      {isLoading ? (
        <Spinner parentComponentCenterPosition={true} />
      ) : (
        <RoutesStructure />
      )}
    </div>
  );
};
