import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getPathByName } from '../../router';
import { authActions, authSelectors } from '../../store/auth';
import { SignUpData, SignUpFormValidationSchema } from '../../types/signUp';
import { ErrorDataView } from '../../componets/ErrorDataView';
import styles from './styles.module.scss';

export const SignUpPage: React.FC = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);
  const error = useSelector(authSelectors.getError);
  const errorData = useSelector(authSelectors.getErrorData);
  const dispatch = useDispatch();
  const initialValues: SignUpData = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  useEffect(() => {
    const clearError = () => {
      dispatch(authActions.setError(null));
    };
    clearError();
    return () => clearError();
  }, [dispatch]);

  const onSubmit = (values: SignUpData) => {
    dispatch(authActions.signUp(values));
  };

  return (
    <div className={`d-flex  flex-grow-1 flex-column ${styles.signUpForm}`}>
      <h3>Вход в систему</h3>
      {error !== null ? (
        <div className="alert alert-danger">
          <h5>Не удалось зарегистрировать пользователя</h5>
          <h6>
            {error === 0
              ? 'Не удалось подключится к серверу'
              : error === 422
              ? 'вы не правильно указали данные пользователя для регистрации'
              : `ошибка с кодом ${error}`}
          </h6>
          <div>
            <ErrorDataView error={error} errorData={errorData} />
          </div>
        </div>
      ) : null}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignUpFormValidationSchema}
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
              {/*имя*/}
              <div className="mt-2 small">имя</div>
              <input
                className={`form-control ${
                  errors.name && touched.name ? 'border-danger' : ''
                }`}
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <div className="small text-danger">
                {errors.name && touched.name && errors.name}
              </div>

              {/*почта*/}
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

              {/*пароль*/}
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

              {/*подтверждение пароля*/}
              <div className="mt-2 small">подтверждение пароля</div>
              <input
                className={`form-control ${
                  errors.password_confirmation && touched.password_confirmation
                    ? 'border-danger'
                    : ''
                }`}
                type="password"
                name="password_confirmation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password_confirmation}
              />
              <div className="small text-danger">
                {errors.password_confirmation &&
                  touched.password_confirmation &&
                  errors.password_confirmation}
              </div>

              {/*панель кнопок*/}
              <div className={styles.buttonPanel}>
                <button
                  className="btn btn-primary btn-sm mt-3 mr-2"
                  type="submit"
                >
                  Зарегистрировать
                </button>
                <button
                  className="btn btn-primary btn-sm mt-3"
                  onClick={handleReset}
                  type="button"
                >
                  Сбросить
                </button>
              </div>
              <div className="mt-3">
                Вы также можете&nbsp;
                <Link to={getPathByName('login')} className="text-info">
                  войти
                </Link>
              </div>
            </fieldset>
          </form>
        )}
      </Formik>
    </div>
  );
};
