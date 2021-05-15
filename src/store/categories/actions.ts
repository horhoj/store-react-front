import {
  CategoriesActionType,
  CategoriesType,
  DeleteCategory,
  GetCategories,
  SetCategories,
  SetError,
  SetIsLoading,
  SetRequestConfigDiff,
} from './types';
import { GetCategoriesRequestConfig } from '../../api/entity/categories/types';

export const setCategories = (categories: CategoriesType): SetCategories => ({
  type: CategoriesActionType.SET_CATEGORIES,
  payload: {
    categories,
  },
});

export const setIsLoading = (isLoading: boolean): SetIsLoading => ({
  type: CategoriesActionType.SET_IS_LOADING,
  payload: {
    isLoading,
  },
});

export const getCategories = (
  getCategoriesRequestConfig: Partial<GetCategoriesRequestConfig>,
): GetCategories => ({
  type: CategoriesActionType.GET_CATEGORIES,
  payload: { getCategoriesRequestConfig },
});

export const setRequestConfigDiff = (
  requestConfigDiff: Partial<GetCategoriesRequestConfig>,
): SetRequestConfigDiff => ({
  type: CategoriesActionType.SET_REQUEST_CONFIG_DIFF,
  payload: {
    requestConfigDiff,
  },
});

export const setError = (error: number | null): SetError => ({
  type: CategoriesActionType.SET_ERROR,
  payload: {
    error,
  },
});

export const deleteCategory = (id: number): DeleteCategory => ({
  type: CategoriesActionType.DELETE_CATEGORIES,
  payload: {
    id,
  },
});
