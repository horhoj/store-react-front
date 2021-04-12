import {RouterPathNames, RouteItem} from "./types";
import {HomePage} from "../pages/HomePage";
import {RouteNotFoundPage} from "../pages/RouteNotFoundPage";
import {AboutPage} from "../pages/AboutPage";


export const routes: RouteItem[] = [
  {
    name: "home",
    path: '/',
    private: true,
    exact: true,
    component: HomePage,
  },
  {
    name: "about",
    path: '/about',
    private: true,
    exact: false,
    component: AboutPage,
  },
  {
    name: "RouteNotFound",
    path: '*',
    exact: false,
    private: false,
    component: RouteNotFoundPage,
  }
];

export const getPathByName = (name: RouterPathNames): string =>
   routes.filter(route => route.name.toString().toLowerCase() === name.toString().toLowerCase())[0].path;

