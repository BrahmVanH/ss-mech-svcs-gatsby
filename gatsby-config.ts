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

	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-bundle-stats',
		'gatsby-plugin-image',
		'gatsby-plugin-apollo',
		'gatsby-plugin-git-lastmod',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
			},
		},
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
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.join(__dirname, `src`, `images`),
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-s3',
			options: {
				aws: {
					credentials: {
						accessKeyId: process.env.AWS_ACCESS_KEY_ID,
						secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
					},
					region: process.env.AWS_REGION,
				},
				buckets: [process.env.AWS_BUCKET_NAME],
			},
		},
	],
};

export default config;
