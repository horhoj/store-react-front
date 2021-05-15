import { CategoryResponseType } from '../../types/categories';
import { GetCategoriesRequestConfig } from '../../api/entity/categories/types';

export enum CategoriesActionType {
  SET_CATEGORIES = 'CATEGORIES/SET_CATEGORIES',
  SET_IS_LOADING = 'CATEGORIES/SET_IS_LOADING',
  GET_CATEGORIES = 'CATEGORIES/GET_CATEGORIES',
  SET_ERROR = 'CATEGORIES/SET_ERROR',
  SET_REQUEST_CONFIG_DIFF = 'CATEGORIES/SET_REQUEST_CONFIG_DIFF',
  DELETE_CATEGORIES = 'CATEGORIES/DELETE_CATEGORIES',
}

export type CategoriesType = CategoryResponseType | null;

export interface CategoriesState {
  categories: CategoriesType;
  isLoading: boolean;
  error: number | null;
  requestConfig: GetCategoriesRequestConfig;
}

export interface CategoriesAction<T = any> {
  type: CategoriesActionType;
  payload: T;
}

export type SetCategories = CategoriesAction<{ categories: CategoriesType }>;

export type SetIsLoading = CategoriesAction<{ isLoading: boolean }>;

export type GetCategories = CategoriesAction<{
  getCategoriesRequestConfig: Partial<GetCategoriesRequestConfig>;
}>;

export type SetRequestConfigDiff = CategoriesAction<{
  requestConfigDiff: Partial<GetCategoriesRequestConfig>;
}>;

export type SetError = CategoriesAction<{ error: number | null }>;

export type DeleteCategory = CategoriesAction<{ id: number }>;
