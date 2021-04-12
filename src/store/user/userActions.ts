import {SetUserIsAuthenticated, UserActionType} from "./types";

export const setUserIsAuthenticated = (isAuthenticated: boolean): SetUserIsAuthenticated => ({
  type: UserActionType.SET_USER_IS_AUTHENTICATED,
  payload: {
    isAuthenticated
  }
})
