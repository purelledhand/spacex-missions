import React from 'react';

import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';

import App from './App';
import Client from './utils/apollo';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
