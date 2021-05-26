import { CategoryEntityType } from '../../types/category';
import {
  AddCategory,
  CategoryActionType,
  CategoryType,
  Clear,
  GetCategory,
  SetCategory,
  SetError,
  SetIsLoading,
  UpdateCategory,
} from './types';

export const setCategory = (category: CategoryType): SetCategory => ({
  type: CategoryActionType.SET_CATEGORY,
  payload: {
    category,
  },
});

export const setIsLoading = (isLoading: boolean): SetIsLoading => ({
  type: CategoryActionType.SET_IS_LOADING,
  payload: {
    isLoading,
  },
});

export const getCategory = (id: number): GetCategory => ({
  type: CategoryActionType.GET_CATEGORY,
  payload: {
    id,
  },
});

export const setError = (error: number | null): SetError => ({
  type: CategoryActionType.SET_ERROR,
  payload: {
    error,
  },
});

export const updateCategory = (
  categoryData: CategoryEntityType,
): UpdateCategory => ({
  type: CategoryActionType.UPDATE_CATEGORY,
  payload: {
    categoryData,
  },
});

export const addCategory = (categoryData: CategoryEntityType): AddCategory => ({
  type: CategoryActionType.ADD_CATEGORY,
  payload: {
    categoryData,
  },
});

export const clear = (): Clear => ({
  type: CategoryActionType.CLEAR,
  payload: null,
});
