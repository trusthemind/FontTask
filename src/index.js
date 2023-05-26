import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { tabsApi } from './components/service/apiSlice';
import { Provider } from 'react-redux';
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { createStore } from '@reduxjs/toolkit';
import { getTabA, getTabB, getTabs } from './components/service/actionGet';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={tabsApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
