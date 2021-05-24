import { ProductEntityType, ProductEntityTypeKeys } from '../../types/product';

export interface ProductFormProps {
  initialValues: ProductEntityType | null;
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
