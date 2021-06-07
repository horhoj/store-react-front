import { StoreState } from '../types';

export const getRedirectPath = (state: StoreState): string | null =>
  state.app.redirectPath;

export const getIsAlternateMenuMode = (state: StoreState): boolean =>
  state.app.alternateMenuMode;
