import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config();

const config: GatsbyConfig = {
	siteMetadata: {
		title: `South Shore Mechanical Services`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-apollo',
		// {
		// 	resolve: 'gatsby-plugin-apollo',
		// 	options: {
		// 		uri: 'http://localhost:4000/graphql',
		// 	},
		// },
		
		{
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				trackingIds: ['G-ZHNY9M7V6L'],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/odin_graceful_transparent.jpg',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images\/svg/,
				}
			}
		}
	],
};

export default config;
