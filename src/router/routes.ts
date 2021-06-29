import { HomePage } from '../pages/HomePage';
import { RouteNotFoundPage } from '../pages/RouteNotFoundPage';
import { LoginPage } from '../pages/LoginPage';
import { Products, ProductNew, ProductEdit } from '../pages/ProductPages';
import { Categories, CategoryNew, CategoryEdit } from '../pages/CategoryPages';
import { SignUpPage } from '../pages/SignUpPage';
import { RouteItem } from './types';

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
    name: 'login',
    path: '/login',
    exact: true,
    private: false,
    always: false,
    component: LoginPage,
  },
  {
    name: 'signUp',
    path: '/sign_up',
    exact: true,
    private: false,
    always: false,
    component: SignUpPage,
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
    name: 'productEdit',
    path: '/products/edit/:id',
    exact: true,
    always: false,
    private: true,
    component: ProductEdit,
  },
  {
    name: 'productNew',
    path: '/products/new',
    exact: true,
    always: false,
    private: true,
    component: ProductNew,
  },
  {
    name: 'categories',
    path: '/categories',
    exact: true,
    always: false,
    private: true,
    component: Categories,
  },
  {
    name: 'categoryEdit',
    path: '/categories/edit/:id',
    exact: true,
    always: false,
    private: true,
    component: CategoryEdit,
  },
  {
    name: 'categoryNew',
    path: '/categories/new',
    exact: true,
    always: false,
    private: true,
    component: CategoryNew,
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
