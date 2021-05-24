import { GetEntitiesRequestConfig } from '../types';
import { CategoriesItemTypeKeys } from '../../../types/categories';

export interface GetCategoriesRequestConfig extends GetEntitiesRequestConfig {}

export interface CategoriesFormVisibleFields {
  name: CategoriesItemTypeKeys;
  title: string;
}
