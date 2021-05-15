import { ProductEntityTypeKeys } from '../../../types/products';
import { GetEntitiesRequestConfig } from '../types';

export interface GetProductsRequestConfig extends GetEntitiesRequestConfig {}

export interface ProductsFormVisibleFields {
  name: ProductEntityTypeKeys;
  title: string;
}
