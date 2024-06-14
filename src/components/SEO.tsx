import React from 'react';
import { useSiteMetadata } from '../lib/use-site-metadata';

import { Helmet } from 'react-helmet';
interface SEOProps {
	currentUrl: string;
}

const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({ currentUrl, children }: React.PropsWithChildren<SEOProps>) => {
	const metaData = useSiteMetadata();

	React.useEffect(() => {
		console.log('SEO');
	}, []);

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
		</Helmet>
	);
};

export default SEO;
