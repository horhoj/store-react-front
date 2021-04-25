import { RouterPathNames, RouteItem } from './types';
import { HomePage } from '../pages/HomePage';
import { RouteNotFoundPage } from '../pages/RouteNotFoundPage';
import { AboutPage } from '../pages/AboutPage';
import { LoginPage } from '../pages/LoginPage';
import { Products } from '../pages/Products';
import { Product } from '../pages/Product';

export const routes: RouteItem[] = [
  {
    name: 'home',
    path: '/',
    exact: true,
    private: true,
    always: false,
    component: HomePage,
  },
  {
    name: 'about',
    path: '/about',
    exact: true,
    private: true,
    always: false,
    component: AboutPage,
  },
  {
    name: 'login',
    path: '/login',
    exact: true,
    private: false,
    always: false,
    component: LoginPage,
  },
  {
    name: 'products',
    path: '/products',
    exact: true,
    private: true,
    always: false,
    component: Products,
  },
  {
    name: 'product',
    path: '/product/:id',
    exact: true,
    always: false,
    private: true,
    component: Product,
  },
  {
    name: 'routeNotFound',
    path: '*',
    exact: false,
    private: false,
    always: true,
    component: RouteNotFoundPage,
  },
];

export const getPathByName = (name: RouterPathNames): string => {
  const routeItem: RouteItem | undefined = routes.find(
    (route) =>
      route.name.toString().toLowerCase() === name.toString().toLowerCase(),
  );
  if (routeItem) {
    return routeItem.path;
  } else {
    throw new Error('getPathByName: Unknown route!');
  }
};
