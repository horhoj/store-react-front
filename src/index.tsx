import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import { Provider } from 'react-redux';
import { App } from './App';
import { rootStore } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
