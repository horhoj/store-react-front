export enum AppActionType {
  REDIRECT = 'APP/REDIRECT',
  TOGGLE_MENU_MODE = 'APP/TOGGLE_MENU_MODE',
}

export interface AppState {
  redirectPath: string | null;
  alternateMenuMode: boolean;
}

export type AppAction = RedirectToPath | ToggleMenuMode;

export type RedirectToPath = {
  type: AppActionType.REDIRECT;
  payload: {
    path: string | null;
  };
};

export type ToggleMenuMode = {
  type: AppActionType.TOGGLE_MENU_MODE;
  payload: null;
};
