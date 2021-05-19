import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { authSelectors } from '../store/auth';
import { PrivateLayout } from '../layouts/PrivateLayout';
import { PublicLayout } from '../layouts/PublicLayout';
import { getPathByName, routes } from './routes';

export const RoutesStructure: React.FC = () => {
  const userIsAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route path={route.path} exact={route.exact} key={route.name}>
            {
              //вся конфигурация роутов задана в router/routes
              //если  для компонента  задано showAlways то немедленно выводим
              route.always ? (
                <route.component />
              ) : //проверяем предназначен ли компонент для работы, если мы вошли в систему
              route.private ? (
                //если да, то проверяем залогинены ли мы
                //и если то показываем его
                //иначе делаем редирект на страницу логина
                userIsAuthenticated ? (
                  <PrivateLayout>
                    <route.component />
                  </PrivateLayout>
                ) : (
                  <Redirect to={getPathByName('login')} />
                )
              ) : //если нет, то то проверяем залогинены ли мы
              //и если да то делаем редирект на главную страницу
              //иначе показываем компонент
              userIsAuthenticated ? (
                <Redirect to={getPathByName('home')} />
              ) : (
                <PublicLayout>
                  <route.component />
                </PublicLayout>
              )
            }
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};
