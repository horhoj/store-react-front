export enum AppActionType {
  REDIRECT = 'APP/REDIRECT',
}

export interface AppState {
  redirectPath: string | null;
}

export interface AppAction<T = any> {
  type: AppActionType;
  payload: T;
}

export type RedirectToPath = AppAction<{ path: string | null }>;
