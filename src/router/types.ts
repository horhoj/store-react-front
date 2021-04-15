import React from 'react';

export type RouterPathNames = 'home' | 'about' | 'login' | 'RouteNotFound';

export interface RouteItem {
  name: RouterPathNames;
  path: string;
  exact: boolean;
  private: boolean;
  always: boolean;
  component: any;
}

export type Routes = RouteItem[];
