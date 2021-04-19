import React from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth';
import { userSelectors } from '../../store/user';

export const PrivateHeader: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(userSelectors.getData);

  const logoutHandle = () => {
    dispatch(authActions.logout());
  };

  return (
    <div
      className={`p-2 d-flex w-100 justify-content-between align-items-center ${styles.mainHeader}`}
    >
      <div>
        <button className="mr-4 btn btn-primary">M</button>
        <span>Admin Panel</span>
      </div>

      <div className="d-flex">
        <button className="btn btn-primary mr-2">
          {userData ? userData.email : ''}
        </button>
        <button className="btn btn-primary" onClick={logoutHandle}>
          Выход
        </button>
      </div>
    </div>
  );
};
