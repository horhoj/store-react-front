import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors, userActions } from '../../store/user';
import styles from './styles.module.scss';
import Spinner from '../../componets/Spinner';

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(userSelectors.getIsLoading);
  const loginHandle = () => {
    dispatch(
      userActions.loginWorkerAction({
        email: 'xman@mail.ru',
        password: 'p@ssw0rd',
      }),
    );
  };
  return (
    <div className={`d-flex  flex-grow-1 flex-column ${styles.loginForm}`}>
      <fieldset disabled={isLoading}>
        <div className="h3">Вход в систему</div>
        <div className="small mt-2">Почта</div>
        <input type="text" className="form-control" />
        <div className="small mt-2">Пароль</div>
        <input type="text" className="form-control" />
        <button onClick={loginHandle} className="btn btn-primary mt-3">
          login
        </button>
      </fieldset>
      {isLoading ? <Spinner parentComponentCenterPosition={true} /> : null}
    </div>
  );
};
