import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { authSelectors } from '../store/auth';
import { PrivateLayout } from '../layouts/PrivateLayout';
import { PublicLayout } from '../layouts/PublicLayout';
import { getPathByName, routes } from './routes';
import { RouteItem } from './types';

export const RoutesStructure: React.FC = () => {
  const userIsAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  const getRouteAction = (route: RouteItem) => {
    //вся конфигурация роутов задана в router/routes
    //если  для компонента  задано showAlways то немедленно выводим
    if (route.always) {
      return <route.component />;
    }
    //проверяем предназначен ли компонент для работы, если мы вошли в систему
    if (route.private) {
      //если да, то проверяем залогинены ли мы
      //и если то показываем его
      //иначе делаем редирект на страницу логина
      if (userIsAuthenticated) {
        return (
          <PrivateLayout>
            <route.component />
          </PrivateLayout>
        );
      }
      return <Redirect to={getPathByName('login')} />;
    }
    //если нет, то то проверяем залогинены ли мы
    //и если да то делаем редирект на главную страницу
    //иначе показываем компонент
    if (userIsAuthenticated) {
      return <Redirect to={getPathByName('home')} />;
    }
    return (
      <PublicLayout>
        <route.component />
      </PublicLayout>
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route path={route.path} exact={route.exact} key={route.name}>
            {getRouteAction(route)}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};
