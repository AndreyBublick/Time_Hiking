import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {App} from './App.tsx';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store.ts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Provider store={store}>

        <App />

      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);


