import React from 'react';
import {PrivateLayout} from "./layouts/PrivateLayout";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {getPathByName, routes} from "./router/";
import {PublicLayout} from "./layouts/PublicLayout";
import {useSelector} from "react-redux";
import {getIsAuthenticated} from "./store/user";

export const App: React.FC = (): JSX.Element => {
  const userIsAuthenticated = useSelector(getIsAuthenticated);
  return (
    <div className="d-flex min-vh-100 min-vw-100">
      <BrowserRouter>
        <Switch>
          {
            routes.map(route => (
              <Route path={route.path} exact={route.exact} key={route.name}>
                {
                  //вся конфигурация роутов задана в router/routes
                  //если  для компонента  задано showAlways то немедленно выводим
                  route.always ? <route.component/> :
                    (
                      //проверяем предназначен ли компонент для работы, если мы вошли в систему
                      route.private ? (
                        //если да, то проверяем залогинены ли мы
                        //и если то показываем его
                        //иначе делаем редирект на страницу логина
                        userIsAuthenticated
                          ? (
                            <PrivateLayout>
                              <route.component/>
                            </PrivateLayout>
                          )
                          : <Redirect to={getPathByName('login')}/>
                      ) : (
                        //если нет, то то проверяем залогинены ли мы
                        //и если да то делаем редирект на главную страницу
                        //иначе показываем компонент
                        userIsAuthenticated
                          ? <Redirect to={getPathByName('home')}/>
                          : (
                            <PublicLayout>
                              <route.component/>
                            </PublicLayout>
                          )
                      )
                    )
                }
              </Route>
            ))
          }
        </Switch>
      </BrowserRouter>
    </div>
  )
}


