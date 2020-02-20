import ApolloClient from 'apollo-boost';
import { hasuraAdminSecretKey } from '../../secret';


const client = new ApolloClient({
    uri: 'https://rn-apollo-graphql-node.herokuapp.com/v1/graphql',
    headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": hasuraAdminSecretKey
    }
});

export default client