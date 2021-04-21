import { RouterPathNames, RouteItem } from './types';
import { HomePage } from '../pages/HomePage';
import { RouteNotFoundPage } from '../pages/RouteNotFoundPage';
import { AboutPage } from '../pages/AboutPage';
import { LoginPage } from '../pages/LoginPage';
import { Products } from '../pages/Products';

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
    exact: false,
    private: true,
    always: false,
    component: AboutPage,
  },
  {
    name: 'login',
    path: '/login',
    exact: false,
    private: false,
    always: false,
    component: LoginPage,
  },
  {
    name: 'products',
    path: '/products',
    exact: false,
    private: true,
    always: false,
    component: Products,
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

export const getPathByName = (name: RouterPathNames): string =>
  routes.filter(
    (route) =>
      route.name.toString().toLowerCase() === name.toString().toLowerCase(),
  )[0].path;
