import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { authActions, authSelectors } from '../../store/auth';
import { UserCredential } from '../../types/auth';
import { DEFAULT_LOGIN_EMAIL, DEFAULT_LOGIN_PASSWORD } from '../../config/API';
import { getPathByName } from '../../router';
import { LoginFormValidationSchema } from '../../types/login';

const LoginForm = styled.div`
  width: 360px;
`;

const ButtonPanel = styled.div`
  button {
    width: 100%;
  }
`;

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getIsLoading);
  const error = useSelector(authSelectors.getError);

  const initialValues: UserCredential = {
    email: DEFAULT_LOGIN_EMAIL,
    password: DEFAULT_LOGIN_PASSWORD,
  };

  const onSubmit = (values: UserCredential) => {
    dispatch(authActions.login(values));
  };

  useEffect(() => {
    const clearError = () => {
      dispatch(authActions.setError(null));
    };
    clearError();
    return () => clearError();
  }, [dispatch]);

  return (
    <LoginForm className={`d-flex  flex-grow-1 flex-column`}>
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
              <ButtonPanel className="d-flex">
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
              </ButtonPanel>
              <div className="mt-3">
                Вы также можете&nbsp;
                <Link to={getPathByName('signUp')} className="text-info">
                  зарегистрироваться
                </Link>
              </div>
            </fieldset>
          </form>
        )}
      </Formik>
    </LoginForm>
  );
};
