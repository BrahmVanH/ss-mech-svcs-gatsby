import React from 'react';
import Layout from '../components/layout';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import Footer from '../components/Footer';

import NotFoundPage from './NotFound';

import 'normalize.css';
import '../styles/Home.css';


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
				<Footer />
			</div>
		</Layout>
	);
};

export default Home;
