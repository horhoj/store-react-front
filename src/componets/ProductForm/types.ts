import { ProductEntityType, ProductEntityTypeKeys } from '../../types/products';

export interface ProductFormProps {
  initialValues?: ProductEntityType;
  submitCb: ProductFormSubmitCb;
  cancelCb: ProductFormCancelCb;
}

export interface ProductFormInputProperties {
  name: ProductEntityTypeKeys;
}

export interface ProductFormSubmitCb {
  (values: ProductEntityType): void;
}

export interface ProductFormCancelCb {
  (): void;
}
