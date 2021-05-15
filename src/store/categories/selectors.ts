import { StoreState } from '../types';
import { GetCategoriesRequestConfig } from '../../api/entity/categories/types';
import { CategoriesType } from './types';

export const getRequestConfig = (
  state: StoreState,
): GetCategoriesRequestConfig => state.categories.requestConfig;

export const getCategories = (state: StoreState): CategoriesType =>
  state.categories.categories;

export const getError = (state: StoreState): number | null =>
  state.categories.error;

export const getIsLoading = (state: StoreState): boolean =>
  state.categories.isLoading;
