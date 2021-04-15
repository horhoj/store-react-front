import { StoreState } from '../types';

export const getIsAuthenticated = (state: StoreState): boolean =>
  state.user.isAuthenticated;
