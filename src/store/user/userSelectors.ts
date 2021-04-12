import {StoreState} from "../types";

export const getUserIsAuthenticated = (state: StoreState): boolean => state.user.isAuthenticated;
