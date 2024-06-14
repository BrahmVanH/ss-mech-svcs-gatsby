import React from 'react';
import { useSiteMetadata } from '../lib/use-site-metadata';

import { Helmet } from 'react-helmet';
interface SEOProps {
	currentUrl: string;
	slug?: string;
}

const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({ currentUrl, slug, children }: React.PropsWithChildren<SEOProps>) => {
	const metaData = useSiteMetadata();


	return (
		<Helmet>
			<meta charSet='utf-8' />
			<title>{metaData.title} - Home Page</title>
			<link rel='canonical' href={currentUrl} />
			<meta name='description' content={metaData.description} />
			<meta name='og:url' content={metaData.siteUrl} />
			<meta name='og:type' content='website' />
			<meta name='og:image' content={metaData.image} />
			<meta name='og:title' content={metaData.title} />
			<meta name='og:description' content={metaData.description} />
			<script type='application/ld+json'>
				{JSON.stringify({
					'@context': 'https://southshoremechanical.services/',
					'@type': 'Website',
					datePublished: '2024-06-13T10:27:55-04:00',
					dateModified: '2024-06-13T10:27:55-04:00',
					image: [`https://${metaData.siteUrl}/favicon-32x32.png`],
				})}
			</script>
		</Helmet>
	);
};

export default SEO;
