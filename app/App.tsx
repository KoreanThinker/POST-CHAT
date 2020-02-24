import React from 'react';
import AppContainer from './src/screens';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './src/graphql/client';
import { UserContextProvider } from './src/contexts/UserContext';


const App = () => {
  return (
    <ApolloProvider client={client} >
      <UserContextProvider>
        <AppContainer />
      </UserContextProvider>
    </ApolloProvider>
  );
};

export default App;
