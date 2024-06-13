import React from 'react';
import Layout from '../components/layout';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Head, { query } from '../components/Head';

import { Helmet } from 'react-helmet';

import NotFoundPage from './404';

import 'normalize.css';
import '../styles/Home.css';
import { useSiteMetadata } from '../lib/use-site-metadata';

const Home: React.FC = () => {
	const homeRef = React.useRef<HTMLDivElement>(null);
	const handleScrollServicesIntoView = () => {
		if (!homeRef?.current) {
			return;
		}
		const home = homeRef?.current?.getBoundingClientRect().top + window.scrollY;

		window.scroll({
			top: home,
			behavior: 'smooth',
		});
	};

	// implement query imported from Head component to get data for Head
	const metaData = useSiteMetadata();

	// React.useEffect(() => {
	// 	console.log('api url: ', process.env.GATSBY_LAMBDA_FUNCTION_URL ?? 'nope');
	// }, []);

	return (
		<Layout handleScrollServicesIntoView={handleScrollServicesIntoView}>
			<Helmet>
				<meta charSet='utf-8' />
				<title>{metaData.title} - Home Page</title>
				{/* <link rel='canonical' href={`${metaData.siteUrl}/${location}`} /> */}
				<link rel='canonical' href='https://southshoremechanical.services/' />
				<meta name='description' content={metaData.description} />
				<meta name='og:url' content={metaData.siteUrl} />
				<meta name='og:type' content='website' />
				<meta name='og:image' content={metaData.image} />
				<meta name='og:title' content={metaData.title} />
				<meta name='og:description' content={metaData.description} />
			</Helmet>
			<div ref={homeRef} className='home'>
				<Services />
				<Reviews />
				<Footer />
			</div>
		</Layout>
	);
};

export default Home;
