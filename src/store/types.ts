import { AuthState } from './auth/types';
import { UserState } from './user/types';
import { ProductsState } from './products/types';
import { ProductState } from './product/types';

export interface StoreState {
  auth: AuthState;
  user: UserState;
  products: ProductsState;
  product: ProductState;
}
