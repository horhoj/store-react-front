import { AuthState } from './auth/types';
import { UserState } from './user/types';

export interface StoreState {
  auth: AuthState;
  user: UserState;
}
