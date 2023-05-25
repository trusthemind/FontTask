// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);
// root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { tabsApi } from './components/service/apiSlice';
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={tabsApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode >
);