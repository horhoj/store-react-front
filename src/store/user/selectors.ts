import { StoreState } from '../types';
import { UserData } from './types';

export const getIsLoading = (state: StoreState): boolean =>
  state.user.isLoading;

export const getData = (state: StoreState): UserData => state.user.data;
