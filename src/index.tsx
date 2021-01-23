import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

import theme from 'styles/theme';
import Client from 'utils/apollo';

import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
