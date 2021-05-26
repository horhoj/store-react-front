import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { appActions, appSelectors } from '../store/app';

export const RedirectComponent: React.FC = () => {
  const redirectPath = useSelector(appSelectors.getRedirectPath);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (redirectPath) {
      history.push(redirectPath);
      dispatch(appActions.redirectToPath(null));
    }
  }, [redirectPath]);
  return null;
};
