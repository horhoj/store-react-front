import { AuthState } from './auth/types';
import { UserState } from './user/types';
import { ProductsState } from './products/types';
import { ProductState } from './product/types';
import { CategoriesState } from './categories/types';
import { CategoryState } from './category/types';
import { AppState } from './app/types';
import { FlashMessageState } from './flashMessage/types';

export interface StoreState {
  app: AppState;
  auth: AuthState;
  user: UserState;
  products: ProductsState;
  product: ProductState;
  categories: CategoriesState;
  category: CategoryState;
  flashMessage: FlashMessageState;
}
