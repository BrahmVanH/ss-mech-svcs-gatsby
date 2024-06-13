import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
	// url: string;
	// title: string;
	// description: string;
	// image?: string;
	slug: string;
}

const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({ slug, children }: React.PropsWithChildren<SEOProps>) => {
	const site = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					image
					siteUrl
				}
			}
		}
	`);


	React.useEffect(() => {
		console.log('site: ', site);
	}, [site]);

	React.useEffect(() => {
		console.log('SEO');
	}, []);

	const metaImage = site.siteMetadata.image;

	return (
		<>
			<title>{site.siteMetaData.title}</title>
			<link rel='canonical' href={site.siteMetaData.siteUrl} />
			<meta name='description' content={site.siteMetaData.description} />
			<meta name='og:url' content={site.siteMetaData.siteUrl} />
			<meta name='og:type' content='website' />
			<meta name='og:image' content={metaImage} />
			<meta name='og:title' content={site.siteMetaData.title} />
			<meta name='og:description' content={site.siteMetaData.description} />

			{children}
		</>
	);
};

export default SEO;
