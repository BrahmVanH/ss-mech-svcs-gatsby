// src/gatsby-plugin-apollo/client.js
import fetch from 'isomorphic-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: process.env.NODE_ENV === 'production' ? process.env.GATSBY_LAMBDA_FUNCTION_URL : 'http://localhost:4000/graphql',
		fetch,
	}),
});

export default client;
