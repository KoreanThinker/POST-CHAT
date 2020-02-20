import React from 'react';
import AppContainer from './src/screens';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './src/graphql/client';

const App = () => {
  return (
    <ApolloProvider client={client} >
      <AppContainer />
    </ApolloProvider>
  );
};

export default App;
