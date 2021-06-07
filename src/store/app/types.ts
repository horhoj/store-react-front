export enum AppActionType {
  REDIRECT = 'APP/REDIRECT',
  TOGGLE_MENU_MODE = 'APP/TOGGLE_MENU_MODE',
}

export interface AppState {
  redirectPath: string | null;
  alternateMenuMode: boolean;
}

export interface AppAction<T = any> {
  type: AppActionType;
  payload: T;
}

export type RedirectToPath = AppAction<{ path: string | null }>;

export type ToggleMenuMode = AppAction<null>;
