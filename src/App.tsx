import React from 'react';
import {PrivateLayout} from "./layouts/PrivateLayout";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {privateRoutes} from "./router/routes";
import {PublicLayout} from "./layouts/PublicLayout/PublicLayout";


export const App: React.FC = (): JSX.Element => {
  return (
    <div className="d-flex min-vh-100 min-vw-100">
      <BrowserRouter>
        <Switch>
          {
            privateRoutes.map(route => (
              <Route path={route.path} exact={route.exact} key={route.name}>
                {
                  route.private
                    ? (
                      <PrivateLayout>
                        <route.component/>
                      </PrivateLayout>
                    )
                    : (
                      <PublicLayout>
                        <route.component/>
                      </PublicLayout>
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


