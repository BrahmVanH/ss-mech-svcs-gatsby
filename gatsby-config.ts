import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';
import path from 'path';
import { url } from 'inspector';

dotenv.config();

const config: GatsbyConfig = {
	siteMetadata: {
		title: `South Shore Mechanical Services`,
		siteUrl: `https://southshoremechanical.services`,
		description: 'South Shore Mechanical Services is a Commercial Maintenance and Residential Handyman that services Marquette County, Michigan.',
		image: '/images/odin_graceful_transparent.jpg',
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-apollo',
		
		{
			resolve: 'gatsby-plugin-sitemap',
			options: {
				output: '/sitemap.xml',
				createLinkInHead: true,
				query: `
					{
						site { 
							siteMetadata {
									siteUrl 
							}
						}
						allSitePage {
							nodes {
								path
								pageContext
							}
						}
					}		
					`,
				serialize: ({ path, pageContext }: { path: string; pageContext: any }) => {
					console.log('pageContext', pageContext);
					return {
						url: path,
						lastmod: pageContext?.lastmod,
					};
				},
			},
		},
		{
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				trackingIds: ['G-T7W9T6882D'],
				pluginConfig: {
					head: true,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/odin_graceful_transparent.jpg',
			},
		},
		'gatsby-plugin-git-lastmod',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.join(__dirname, `src`, `images`),
			},
			__key: 'images',
		},
		// Example of how to use gatsby-plugin-offline with precache config
		// {
		// 	resolve: `gatsby-plugin-offline`,
		// 	options: {
		// 		precachePages: [`/about-us/`, `/projects/*`],
		// 	},
		// },
	],
};

export default config;
