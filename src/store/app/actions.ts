import { AppActionType, RedirectToPath, ToggleMenuMode } from './types';

export const redirectToPath = (path: string | null): RedirectToPath => ({
  type: AppActionType.REDIRECT,
  payload: {
    path,
  },
});

export const toggleMenuMode = (): ToggleMenuMode => ({
  type: AppActionType.TOGGLE_MENU_MODE,
  payload: null,
});
