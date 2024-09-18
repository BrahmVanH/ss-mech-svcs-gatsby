import fetch from 'isomorphic-fetch';
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import * as Sentry from '@sentry/react';
// import { setContext } from '@apollo/client/link/context';

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach((butts) => {
			Sentry.captureException(butts);
		});
		graphQLErrors.map(({ message, locations, path }) => {
			console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
			console.log(locations);
			Sentry.captureException(message);
		});
	}
	if (networkError) {
		console.log(`[Network error]: ${networkError}`);
		Sentry.captureException(networkError);
	}
});

const httpLink = new HttpLink({ uri: process.env.NODE_ENV === 'production' ? (process.env.GATSBY_API_URL ?? '') : 'http://localhost:4000/graphql', credentials: 'same-origin', fetch });

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
