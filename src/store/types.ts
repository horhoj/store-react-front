import { AuthState } from './auth/types';
import { UserState } from './user/types';
import { ProductsState } from './products/types';

export interface StoreState {
  auth: AuthState;
  user: UserState;
  products: ProductsState;
}
