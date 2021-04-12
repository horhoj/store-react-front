import {IRouteItem} from "./types";
import {HomePage} from "../pages/HomePage";
import {RouteNotFoundPage} from "../pages/RouteNotFoundPage";

export const privateRoutes: IRouteItem[] = [
  {
    name: 'Home',
    path: '/',
    private: true,
    exact: true,
    component: HomePage,
  },
  {
    name: 'RouteNotFound',
    path: '*',
    exact: false,
    private: false,
    component: RouteNotFoundPage,
  }
];

