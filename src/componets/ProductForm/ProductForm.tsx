import React from 'react';
import { ProductFormInputProperties, ProductFormProps } from './types';
import { Formik } from 'formik';
import { ProductEntitySchema, ProductEntityType } from '../../types/products';
import styles from './styles.module.scss';

const defaultValues: ProductEntityType = {
  id: 0,
  title: '',
  description: '',
  options: '',
  category: '',
};

export const ProductForm: React.FC<ProductFormProps> = ({
  initialValues,
  submitCb,
  cancelCb,
}) => {
  const onSubmit = (values: ProductEntityType) => {
    submitCb(values);
  };

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues || defaultValues}
        onSubmit={onSubmit}
        validationSchema={ProductEntitySchema}
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
                {...({ name: 'title' } as ProductFormInputProperties)}
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
                {...({ name: 'description' } as ProductFormInputProperties)}
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
            <div>
              <div className="mt-2 small">Параметры</div>
              <input
                className="form-control"
                type="text"
                {...({ name: 'options' } as ProductFormInputProperties)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.options ?? ''}
              />
              <div className="small text-danger">
                {errors.options && touched.options && errors.options}
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
