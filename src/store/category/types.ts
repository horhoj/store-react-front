import { CategoryEntityType } from '../../types/category';

export enum CategoryActionType {
  SET_CATEGORY = 'CATEGORY/SET_CATEGORY',
  SET_IS_LOADING = 'CATEGORY/SET_IS_LOADING',
  GET_CATEGORY = 'CATEGORY/GET_CATEGORY',
  SET_ERROR = 'CATEGORY/SET_ERROR',
  UPDATE_CATEGORY = 'CATEGORY/UPDATE_CATEGORY',
  SET_REDIRECT_TO_CATEGORY_LIST = 'CATEGORY/SET_REDIRECT_TO_CATEGORY_LIST',
  ADD_CATEGORY = 'CATEGORY/ADD_CATEGORY',
  CLEAR = 'CATEGORY/CLEAR',
}

export interface CategoryState {
  category: CategoryType;
  isLoading: boolean;
  error: number | null;
  redirectToCategoryList: boolean;
}

export type CategoryType = CategoryEntityType | null;

export interface CategoryAction<T = any> {
  type: CategoryActionType;
  payload: T;
}

export type SetCategory = CategoryAction<{
  category: CategoryType;
}>;

export type SetIsLoading = CategoryAction<{
  isLoading: boolean;
}>;

export type GetCategory = CategoryAction<{
  id: number;
}>;

export type SetError = CategoryAction<{
  error: number | null;
}>;

export type UpdateCategory = CategoryAction<{
  categoryData: CategoryEntityType;
}>;

export type SetRedirectToCategoryAction = CategoryAction<{
  redirect: boolean;
}>;

export type AddCategory = CategoryAction<{
  categoryData: CategoryEntityType;
}>;

export type Clear = CategoryAction;
