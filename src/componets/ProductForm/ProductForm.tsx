import React from 'react';
import { ProductFormInputProperties, ProductFormProps } from './types';
import { Formik } from 'formik';
import { ProductEntitySchema, ProductEntityType } from '../../types/products';

const defaultValues: ProductEntityType = {
  id: 0,
  title: '',
  params: '',
  description: '',
};

export const ProductForm: React.FC<ProductFormProps> = ({
  initialValues = defaultValues,
  submitCb,
}) => {
  const onSubmit = (values: ProductEntityType) => {
    submitCb(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
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
                {...({ name: 'params' } as ProductFormInputProperties)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.params ?? ''}
              />
              <div className="small text-danger">
                {errors.params && touched.params && errors.params}
              </div>
            </div>
            <button className="btn btn-primary btn-sm mt-3 mr-2" type="submit">
              Сохранить
            </button>
            <button
              className="btn btn-primary btn-sm mt-3"
              onClick={handleReset}
            >
              Сбросить
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
