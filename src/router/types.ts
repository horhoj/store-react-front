export type RouterPathNames =
  | 'home'
  | 'about'
  | 'login'
  | 'routeNotFound'
  | 'products';

export interface RouteItem {
  name: RouterPathNames;
  path: string;
  exact: boolean;
  private: boolean;
  always: boolean;
  component: any;
}

export type Routes = RouteItem[];
