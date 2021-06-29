import { CategoryEntityType } from '../../types/category';

export enum CategoryActionType {
  SET_CATEGORY = 'CATEGORY/SET_CATEGORY',
  SET_IS_LOADING = 'CATEGORY/SET_IS_LOADING',
  GET_CATEGORY = 'CATEGORY/GET_CATEGORY',
  SET_ERROR = 'CATEGORY/SET_ERROR',
  UPDATE_CATEGORY = 'CATEGORY/UPDATE_CATEGORY',
  ADD_CATEGORY = 'CATEGORY/ADD_CATEGORY',
  CLEAR = 'CATEGORY/CLEAR',
}

export interface CategoryState {
  category: CategoryType;
  isLoading: boolean;
  error: number | null;
}

export type CategoryType = CategoryEntityType | null;

export type CategoryAction =
  | SetCategory
  | SetIsLoading
  | GetCategory
  | SetError
  | UpdateCategory
  | AddCategory
  | Clear;

export interface SetCategory {
  type: CategoryActionType.SET_CATEGORY;
  payload: {
    category: CategoryType;
  };
}

export interface SetIsLoading {
  type: CategoryActionType.SET_IS_LOADING;
  payload: {
    isLoading: boolean;
  };
}

export interface GetCategory {
  type: CategoryActionType.GET_CATEGORY;
  payload: {
    id: number;
  };
}

export interface SetError {
  type: CategoryActionType.SET_ERROR;
  payload: {
    error: number | null;
  };
}

export interface UpdateCategory {
  type: CategoryActionType.UPDATE_CATEGORY;
  payload: { categoryData: CategoryEntityType };
}

export interface AddCategory {
  type: CategoryActionType.ADD_CATEGORY;
  payload: {
    categoryData: CategoryEntityType;
  };
}

export interface Clear {
  type: CategoryActionType.CLEAR;
  payload: null;
}
