import React from "react";

export type RouterPathNames =
  | 'home'
  | 'about'
  | 'RouteNotFound';

export interface RouteItem {
  name: RouterPathNames;
  path: string;
  exact: boolean;
  private: boolean;
  component: React.FC;
}

export type Routes = RouteItem[]

