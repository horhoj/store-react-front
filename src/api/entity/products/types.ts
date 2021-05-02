import { Products } from '../../../pages/Products';
import { ProductEntityTypeKeys } from '../../../types/products';

export interface GetProductsRequestConfig {
  page: number;
  per_page: number;
  search: string;
  sort_field: string;
  sort_asc: 0 | 1;
}

export interface ProductsFormVisibleFields {
  name: ProductEntityTypeKeys;
  title: string;
}
