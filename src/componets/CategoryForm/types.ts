import {
  CategoryEntityType,
  CategoryEntityTypeKeys,
} from '../../types/category';

export interface CategoryFormProps {
  initialValues: CategoryEntityType | null;
  submitCb: CategoryFormSubmitCb;
  cancelCb: CategoryFormCancelCb;
}

export interface CategoryFormInputProperties {
  name: CategoryEntityTypeKeys;
}

export interface CategoryFormSubmitCb {
  (values: CategoryEntityType): void;
}

export interface CategoryFormCancelCb {
  (): void;
}
