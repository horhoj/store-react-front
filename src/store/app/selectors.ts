import { StoreState } from '../types';

export const getRedirectPath = (state: StoreState): string | null =>
  state.app.redirectPath;
