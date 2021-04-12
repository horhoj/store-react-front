import {UserState} from "./types";

const initialState: UserState = {
  isAuthenticated: true
}

export const userReducer = (state: UserState = initialState, action: any): UserState => {
  switch (action.type) {
    default:
      return state;
  }
}

