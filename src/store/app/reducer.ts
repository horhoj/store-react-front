import { AppAction, AppActionType, AppState, RedirectToPath } from './types';

const initialState: AppState = {
  redirectPath: null,
};

export const appReducer = (
  state: AppState = initialState,
  action: AppAction,
): AppState => {
  switch (action.type) {
    case AppActionType.REDIRECT:
      return {
        ...state,
        redirectPath: (action as RedirectToPath).payload.path,
      };
    default:
      return state;
  }
};
