import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { hasuraAdminSecretKey } from '../../secret';
import { split, ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = new HttpLink({
    uri: 'https://post-chat-graphql.herokuapp.com/v1/graphql',
    headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": hasuraAdminSecretKey
    },
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
    uri: `https://post-chat-graphql.herokuapp.com/v1/graphql`,
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                "content-type": "application/json",
                "x-hasura-admin-secret": hasuraAdminSecretKey
            }
        }
    },

});

const terminatingLink = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return (
            kind === 'OperationDefinition' && operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const link = ApolloLink.from([terminatingLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
    link,
    cache,
});



export default client