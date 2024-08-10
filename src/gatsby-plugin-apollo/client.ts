import fetch from 'isomorphic-fetch';
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
// import { setContext } from '@apollo/client/link/context';

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

const httpLink = new HttpLink({ uri: process.env.GATSBY_API_URL ?? '', credentials: 'same-origin', fetch });

// const authLink = setContext((_, { headers }) => {
// 	const apiKey = process.env.API_KEY ?? '';

// 	return {
// 		headers: {
// 			...headers,
// 			authorization: apiKey ? `Bearer ${apiKey}` : '',
// 		},
// 	};
// });

const link = from([errorLink, httpLink]);

// This all needs to be moved into gatsby-config
// Current file will just export functions that can be used in gatsby-config
// and will take in envs as arguments
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
