import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Store from './Redux'

ReactDOM.render(
  <React.StrictMode>
          <Provider store={Store}>
          <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
