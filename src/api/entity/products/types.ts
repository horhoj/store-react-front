import { GetEntitiesRequestConfig } from '../types';
import { ProductsItemTypeKeys } from '../../../types/products';

export interface GetProductsRequestConfig extends GetEntitiesRequestConfig {}

export interface ProductsFormVisibleFields {
  name: ProductsItemTypeKeys;
  title: string;
}
