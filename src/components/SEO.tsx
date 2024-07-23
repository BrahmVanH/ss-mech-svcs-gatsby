import * as React from 'react';
import { useSiteMetadata } from '../lib/use-site-metadata';

import { Helmet } from 'react-helmet';
interface SEOProps {
	page?: string;
	description?: string;
}

// export const SEO = ({ title, description, pathname, children }) => {
// const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

// const seo = {
//   title: title || defaultTitle,
//   description: description || defaultDescription,
//   image: `${siteUrl}${image}`,
//   url: `${siteUrl}${pathname || ``}`,
//   twitterUsername,
// }

const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({ page, children }: React.PropsWithChildren<SEOProps>) => {
	const [currentUrl, setCurrentUrl] = React.useState<string>('');

	const metaData = useSiteMetadata();

	const title = page ? `${metaData.title} - ${page}` : metaData.title;

	React.useEffect(() => {
		const url = typeof window !== 'undefined' ? window.location.href : '';
		if (url) {
			setCurrentUrl(url);
		}
	}, []);

	return (
		<>
			{currentUrl ? (
				<Helmet>
					<meta charSet='utf-8' />
					<title>{title}</title>

					<link rel='canonical' href={currentUrl} />
					<meta name='description' content={metaData.description} />
					<meta name='og:url' content={metaData.siteUrl} />
					<meta name='og:type' content='website' />
					<meta name='og:image' content={metaData.image} />
					<meta name='og:title' content={metaData.title} />
					<meta name='og:description' content={metaData.description} />
					{/* <script type='application/ld+json'>
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Website',
					datePublished: '2024-06-13T10:27:55-04:00',
					dateModified: '2024-06-13T10:27:55-04:00',
					image: [`https://${metaData.siteUrl}/favicon-32x32.png`],
				})}
			</script> */}
					{/* LocalBusiness Structured Data for Google SEO */}
					<script type='application/ld+json'>
						{JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'HomeAndConstructionBusiness',
							url: `${metaData.siteUrl}`,
							name: 'South Shore Mechanical Services',
							currenciesAccepted: ['USD', 'BTC'],
							openingHours: 'Mo,Tu,We,Th,Fr,Sa 08:00-18:00',
							paymentAccepted: ['Cash', 'Credit Card', 'Cryptocurrency', 'Local Exchange Tradings System'],
							address: {
								'@type': 'PostalAddress',
								streetAddress: '908 Champion Street',
								addressLocality: 'Michigan',
								addressRegion: 'MI',
								postalCode: '49855',
								addressCountry: 'US',
							},

							email: 'mailto:info@southshoremechanical.services',
							telephone: '(906) 236-2760',
							keywords:
								'commercial building routine maintenance, commercial building repair and maintenance near me, commercial building maintenance services, commercial building repair and maintenance, repair, maintenance, applicant repair, drywall, electrical, plumbing repair, plumbing service, handyman, residential handyman, commercial handyman, appliance service, handyman near me, handyman services near me, handyman services, handyman marquette, handyman craigslist, commercial maintenance marquette, commercial building maintenance, commercial building maintenance marquette',
						})}
					</script>
					{/* Breadcrumb List structured data for Google SEO */}
					{/* To Do: Add rest of pages to structured data */}
					<script type='application/ld+json'>
						{JSON.stringify([
							{
								'@context': 'https://schema.org',
								'@type': 'BreadcrumbList',
								itemListElement: [
									{
										'@type': 'ListItem',
										position: 1,
										name: 'Home',
										item: 'https://southshoremechanical.services',
									},
									{
										'@type': 'ListItem',
										position: 2,
										name: 'Commercial Services',
										item: 'https://southshoremechanical.services/services/Commercial',
									},
								],
							},
							{
								'@context': 'https://schema.org',
								'@type': 'BreadcrumbList',
								itemListElement: [
									{
										'@type': 'ListItem',
										position: 1,
										name: 'Home',
										item: 'https://southshoremechanical.services',
									},
									{
										'@type': 'ListItem',
										position: 2,
										name: 'Residential Services',
										item: 'https://southshoremechanical.services/services/Residential',
									},
								],
							},
							{
								'@context': 'https://schema.org',
								'@type': 'BreadcrumbList',
								itemListElement: [
									{
										'@type': 'ListItem',
										position: 1,
										name: 'Home',
										item: 'https://southshoremechanical.services',
									},
									{
										'@type': 'ListItem',
										position: 2,
										name: 'Contact',
										item: 'https://southshoremechanical.services/contact',
									},
								],
							},
							{
								'@context': 'https://schema.org',
								'@type': 'BreadcrumbList',
								itemListElement: [
									{
										'@type': 'ListItem',
										position: 1,
										name: 'Home',
										item: 'https://southshoremechanical.services',
									},
									{
										'@type': 'ListItem',
										position: 2,
										name: 'About',
										item: 'https://southshoremechanical.services/about',
									},
								],
							},
						])}
					</script>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link href='https://fonts.googleapis.com/css2?family=Abel&display=swap' rel='stylesheet' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link href='https://fonts.googleapis.com/css2?family=Crete+Round:ital@0;1&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Zen+Kaku+Gothic+New&display=swap' rel='stylesheet' />
				</Helmet>
			) : (
				<></>
			)}{' '}
		</>
	);
};

export default SEO;
