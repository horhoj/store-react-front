import { ProductEntityType, ProductEntityTypeKeys } from '../../types/products';

export interface ProductFormProps {
  initialValues: ProductEntityType;
  submitCb: ProductFormSubmitCb;
}

export interface ProductFormInputProperties {
  name: ProductEntityTypeKeys;
}

export interface ProductFormSubmitCb {
  (values: ProductEntityType): void;
}
