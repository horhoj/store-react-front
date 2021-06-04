import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { authActions, authSelectors } from '../../store/auth';
import { UserCredential } from '../../types/auth';
import { DEFAULT_LOGIN_EMAIL, DEFAULT_LOGIN_PASSWORD } from '../../config/API';
import { LoginFormValidationSchema } from './types';
import styles from './styles.module.scss';

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getIsLoading);
  const error = useSelector(authSelectors.getLoginError);

  const initialValues: UserCredential = {
    email: DEFAULT_LOGIN_EMAIL,
    password: DEFAULT_LOGIN_PASSWORD,
  };

  const onSubmit = (values: UserCredential) => {
    dispatch(authActions.login(values));
  };

  useEffect(() => {
    const clearError = () => {
      dispatch(authActions.setLoginError(null));
    };
    clearError();
    return () => clearError();
  }, [dispatch]);

  return (
    <div className={`d-flex  flex-grow-1 flex-column ${styles.loginForm}`}>
      <h3>Вход в систему</h3>
      {error !== null ? (
        <div className="alert alert-danger">
          <h5>Не удалось войти в систему</h5>
          <div>
            {error === 0
              ? 'Не удалось подключится к серверу'
              : error === 401
              ? 'Неправильные логин или пароль'
              : `ошибка с кодом ${error}`}
          </div>
        </div>
      ) : null}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={LoginFormValidationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        }) => (
          <form onSubmit={handleSubmit} noValidate={true} autoComplete={'off'}>
            <fieldset disabled={isLoading}>
              <div className="mt-2 small">почта</div>
              <input
                className={`form-control ${
                  errors.email && touched.email ? 'border-danger' : ''
                }`}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className="small text-danger">
                {errors.email && touched.email && errors.email}
              </div>
              <div className="mt-2 small">пароль</div>
              <input
                className={`form-control ${
                  errors.password && touched.password ? 'border-danger' : ''
                }`}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div className="small text-danger">
                {errors.password && touched.password && errors.password}
              </div>
              <div className={styles.buttonPanel}>
                <button
                  className="btn btn-primary btn-sm mt-3 mr-2"
                  type="submit"
                >
                  Войти
                </button>
                <button
                  className="btn btn-primary btn-sm mt-3"
                  onClick={handleReset}
                  type="button"
                >
                  Сбросить
                </button>
              </div>
            </fieldset>
          </form>
        )}
      </Formik>
    </div>
  );
};
