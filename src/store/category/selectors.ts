import { StoreState } from '../types';
import { CategoryEntityType } from '../../types/category';

export const getCategory = (state: StoreState): CategoryEntityType | null =>
  state.category.category;

export const getError = (state: StoreState): number | null =>
  state.category.error;

export const getIsLoading = (state: StoreState): boolean =>
  state.category.isLoading;

export const getRedirectToCategoryList = (state: StoreState): boolean =>
  state.category.redirectToCategoryList;
