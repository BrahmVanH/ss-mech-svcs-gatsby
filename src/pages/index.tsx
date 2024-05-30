import React from 'react';
import ContactHero from '../components/ContactHero';
import Reviews from '../components/Reviews';
import Services from '../components/Services';

import '../styles/Home.css';
import Layout from '../components/layout';

const Home: React.FC = () => {
	return (
		<Layout>
			<div className='home'>
				<Services />
				<Reviews />
				<ContactHero />
			</div>
		</Layout>
	);
};

export default Home;
