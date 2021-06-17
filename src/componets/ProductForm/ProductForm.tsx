import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  ProductAttachedCategoriesType,
  ProductEntitySchema,
  ProductEntityType,
} from '../../types/product';
import { EntityList } from '../EntityList';
import { EntityListAddItemCb } from '../EntityList/types';
import { ModalWindow } from '../ModalWindow';
import { ModalWindowHideCb } from '../ModalWindow/types';
import { CategoryList } from '../../pages/CategoryPages';
import { CategoryListSelectActionCb } from '../../pages/CategoryPages/Categories/types';
import { FlashMessageBody } from '../../types/flashMessage';
import { flashMessageActions } from '../../store/flashMessage';
import {
  ProductFormAttachedCategoryVisibleField,
  ProductFormInputProperties,
  ProductFormProps,
} from './types';
import styles from './styles.module.scss';

const defaultValues: ProductEntityType = {
  id: 0,
  title: '',
  description: '',
  options: '',
  categories: [],
};

const entityListVisibleFields: ProductFormAttachedCategoryVisibleField[] = [
  { name: 'id', title: 'ИД' },
  { name: 'title', title: 'Наименование' },
  { name: 'description', title: 'Описание' },
];

export const ProductForm: React.FC<ProductFormProps> = ({
  initialValues,
  submitCb,
  cancelCb,
}) => {
  const [categories, setCategories] = useState<ProductAttachedCategoriesType[]>(
    [],
  );
  const [showSelectCategoryModalForm, setShowSelectCategoryModalForm] =
    useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (initialValues) {
      setCategories(initialValues.categories);
    }
  }, [initialValues]);

  const onSubmit = (values: ProductEntityType) => {
    const result: ProductEntityType = {
      ...values,
      categories: [...categories],
    };
    submitCb(result);
  };

  const addItemCb: EntityListAddItemCb = () => {
    setShowSelectCategoryModalForm(true);
  };

  const hideCb: ModalWindowHideCb = () => {
    setShowSelectCategoryModalForm(false);
  };
  const categoryListSelectActionCb: CategoryListSelectActionCb = (item) => {
    if (categories.filter((category) => category.id === item.id).length === 0) {
      setCategories((prev) => [...prev, item]);
      hideCb();
    } else {
      const warningMessage: FlashMessageBody = {
        message: 'Выбранная категория уже в списке добавленных!',
        type: 'alert-warning',
      };
      dispatch(flashMessageActions.showMessage(warningMessage));
    }
  };

  return (
    <div>
      <ModalWindow hideCb={hideCb} isShow={showSelectCategoryModalForm}>
        <div className="d-flex flex-column flex-grow-1">
          <h4>Выберите категорию для добавления</h4>
          {showSelectCategoryModalForm ? (
            <CategoryList
              isModal={true}
              selectActionCb={categoryListSelectActionCb}
            />
          ) : null}
        </div>
      </ModalWindow>
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
            <div className="mt-3 border rounded p-2">
              <div className="h5">
                Данный товар входит в следующие категории
              </div>
              <EntityList
                visibleFields={entityListVisibleFields}
                items={categories}
                setItems={setCategories}
                addItemCb={addItemCb}
              />
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
