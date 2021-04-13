import {SetIsAuthenticated, UserActionType} from "./types";

export const setIsAuthenticated = (isAuthenticated: boolean): SetIsAuthenticated => ({
  type: UserActionType.SET_IS_AUTHENTICATED,
  payload: {
    isAuthenticated
  }
})
