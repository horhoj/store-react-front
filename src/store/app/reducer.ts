import { AppAction, AppActionType, AppState, RedirectToPath } from './types';

const initialState: AppState = {
  redirectPath: null,
  alternateMenuMode: false,
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
    case AppActionType.TOGGLE_MENU_MODE:
      return {
        ...state,
        alternateMenuMode: !state.alternateMenuMode,
      };
    default:
      return state;
  }
};
