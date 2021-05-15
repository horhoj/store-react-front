import { GetEntitiesRequestConfig } from '../types';
import { CategoryEntityTypeKeys } from '../../../types/categories';

export interface GetCategoriesRequestConfig extends GetEntitiesRequestConfig {}

export interface CategoriesFormVisibleFields {
  name: CategoryEntityTypeKeys;
  title: string;
}
