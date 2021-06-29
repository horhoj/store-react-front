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

export type CategoriesAction =
  | SetCategories
  | SetIsLoading
  | GetCategories
  | SetRequestConfigDiff
  | SetError
  | DeleteCategory;

export interface SetCategories {
  type: CategoriesActionType.SET_CATEGORIES;
  payload: {
    categories: CategoriesType;
  };
}

export interface SetIsLoading {
  type: CategoriesActionType.SET_IS_LOADING;
  payload: { isLoading: boolean };
}

export interface GetCategories {
  type: CategoriesActionType.GET_CATEGORIES;
  payload: {
    getCategoriesRequestConfig: Partial<GetCategoriesRequestConfig>;
  };
}

export interface SetRequestConfigDiff {
  type: CategoriesActionType.SET_REQUEST_CONFIG_DIFF;
  payload: {
    requestConfigDiff: Partial<GetCategoriesRequestConfig>;
  };
}

export interface SetError {
  type: CategoriesActionType.SET_ERROR;
  payload: { error: number | null };
}

export interface DeleteCategory {
  type: CategoriesActionType.DELETE_CATEGORIES;
  payload: { id: number };
}
