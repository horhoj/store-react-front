import { AppActionType, RedirectToPath } from './types';

export const redirectToPath = (path: string | null): RedirectToPath => ({
  type: AppActionType.REDIRECT,
  payload: {
    path,
  },
});
