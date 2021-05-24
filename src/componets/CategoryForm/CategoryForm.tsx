import { Formik } from 'formik';
import React from 'react';
import { CategoryEntitySchema, CategoryEntityType } from '../../types/category';
import { CategoryFormInputProperties, CategoryFormProps } from './types';
import styles from './styles.module.scss';

const defaultValues: CategoryEntityType = {
  id: 0,
  title: '',
  description: '',
};
export const CategoryForm: React.FC<CategoryFormProps> = ({
  initialValues,
  submitCb,
  cancelCb,
}) => {
  const onSubmit = (values: CategoryEntityType) => {
    submitCb(values);
  };

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues || defaultValues}
        validationSchema={CategoryEntitySchema}
        onSubmit={onSubmit}
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
          <form noValidate={true} autoComplete={'off'} onSubmit={handleSubmit}>
            <div>
              <div className="mt-2 small">Наименование</div>
              <input
                className="form-control"
                type="text"
                {...({ name: 'title' } as CategoryFormInputProperties)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <div className="small text-danger">
                {errors.title && touched.title && errors.title}
              </div>
            </div>
            <div>
              <div className="mt-2 small">Описание</div>
              <input
                className="form-control"
                type="text"
                {...({ name: 'description' } as CategoryFormInputProperties)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description ?? ''}
              />
              <div className="small text-danger">
                {errors.description &&
                  touched.description &&
                  errors.description}
              </div>
            </div>
            <div className={`mt-3 ${styles.buttonsPanel}`}>
              <button className="btn btn-primary btn-sm mr-2" type="submit">
                Сохранить
              </button>
              <button
                className="btn btn-primary btn-sm mr-2"
                type="button"
                onClick={handleReset}
              >
                Сбросить
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm mr-2"
                onClick={cancelCb}
              >
                Отмена
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
