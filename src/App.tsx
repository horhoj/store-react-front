import React from 'react';
import {HomePage} from "./pages/HomePage";
import {MainLayout} from "./layouts/MainLayout";

export const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <MainLayout>
        <HomePage/>
      </MainLayout>
    </div>
  )
}


