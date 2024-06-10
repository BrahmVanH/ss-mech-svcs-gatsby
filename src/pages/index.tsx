import React from 'react';
import ContactHero from '../components/ContactHero';
import Reviews from '../components/Reviews';
import Services from '../components/Services';

import Layout from '../components/layout';
import NotFoundPage from './NotFound';
import '../styles/Home.css';
import dotenv from 'dotenv';

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

	// React.useEffect(() => {
	// 	console.log('api url: ', process.env.GATSBY_LAMBDA_FUNCTION_URL ?? 'nope');
	// }, []);

	return (
		<Layout handleScrollServicesIntoView={handleScrollServicesIntoView}>
			<div ref={homeRef} className='home'>
				<Services />
				<Reviews />
				<ContactHero />
			</div>
		</Layout>
	);
};

export default Home;
