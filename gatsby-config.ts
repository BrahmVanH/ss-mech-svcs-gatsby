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
		image: '/images/odin_graceful_transparent_square.jpeg',
	},

	graphqlTypegen: true,
	plugins: [
		{
			resolve: 'gatsby-source-s3',
			options: {
				protocol: 'https',
				download: true,

				images: {
					download: true,
					quality: 100,
					webp: true,
				},
				host: 's3.amazonaws.com',
				port: 443,
				localFile: {
					path: './src/images',
				},

				aws: {
					credentials: {
						accessKeyId: process.env.PROD_AWS_ACCESS_KEY,
						secretAccessKey: process.env.PROD_AWS_SECRET_ACCESS_KEY,
					},
					region: process.env.PROD_AWS_REGION,
				},
				buckets: [process.env.PROD_AWS_BUCKET_NAME],
				expiration: 601800,
			},
		},
		'gatsby-plugin-bundle-stats',
		'gatsby-plugin-image',
		'gatsby-plugin-apollo',
		'gatsby-plugin-git-lastmod',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-plugin-preload-fonts`,
		`gatsby-plugin-remove-serviceworker`,
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
			},
		},
		{
			resolve: 'gatsby-plugin-sitemap',
			options: {
				createLinkInHead: true,
				output: '/',
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
					return {
						url: `https://southshoremechanical.services/${path}`,
						lastmod: pageContext?.lastmod,
						changefreq: 'monthly',
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
				icon: 'src/images/odin_graceful_transparent_square.jpeg',
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
			resolve: `gatsby-plugin-styled-components`,
			options: {
				displayName: false,
			},
		},
		{
			resolve: '@sentry/gatsby',
			options: {
				project: 'ss-mech-svcs-gatsby',
			},
		},
	],
};

export default config;
