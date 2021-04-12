import {SetUserIsAuthenticated, UserAction, UserActionType, UserState} from "./types";

const initialState: UserState = {
  isAuthenticated: false
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.SET_USER_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: (action as SetUserIsAuthenticated).payload.isAuthenticated
      }
    default:
      return state;
  }
}

