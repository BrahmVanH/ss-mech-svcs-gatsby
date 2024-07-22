import fetch from 'isomorphic-fetch';
import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach((butts) => {
			console.log(butts);
		});
		graphQLErrors.map(({ message, locations, path }) => {
			console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
			console.log(locations);
		});
	}
	if (networkError) {
		console.log(`[Network error]: ${networkError}`);
	}
});

// const httpLink = new HttpLink({ uri: process.env.NODE_ENV === 'production' ? process.env.GATSBY_LAMBDA_FUNCTION_URL : 'http://localhost:4000/graphql' });
const httpLink = new HttpLink({ uri: process.env.GATSBY_LAMBDA_FUNCTION_URL, credentials: 'include' });

const link = from([errorLink, httpLink]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link,
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'cache-and-network',
		},
		query: {
			fetchPolicy: 'network-only',
		},
	},
});

export default client;
