export type RouterPathNames =
  | 'home'
  | 'login'
  | 'routeNotFound'
  | 'products'
  | 'productEdit'
  | 'productNew'
  | 'categories'
  | 'categoryEdit'
  | 'categoryNew';

export interface RouteItem {
  name: RouterPathNames;
  path: string;
  exact: boolean;
  private: boolean;
  always: boolean;
  component: any;
}

export type Routes = RouteItem[];
