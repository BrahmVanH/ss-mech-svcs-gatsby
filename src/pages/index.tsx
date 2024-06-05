import React from 'react';
import ContactHero from '../components/ContactHero';
import Reviews from '../components/Reviews';
import Services from '../components/Services';

import Layout from '../components/layout';
import NotFoundPage from './NotFound';
import '../styles/Home.css';

const Home: React.FC = () => {
	
	const homeRef = React.useRef<HTMLDivElement>(null);
	const handleScrollServicesIntoView = () => {
		homeRef.current?.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<Layout handleScrollServicesIntoView={handleScrollServicesIntoView}>
			<div ref={homeRef} className='home'>
				
				<Services  />
				<Reviews />
				<ContactHero />
			</div>
		</Layout>
	);
};

export default Home;
