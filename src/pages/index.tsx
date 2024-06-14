import React from 'react';
import Layout from '../components/layout';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import Footer from '../components/Footer';

import 'normalize.css';
import '../styles/Home.css';
import SEO from '../components/SEO';

const Home: React.FC = () => {
	const [currentUrl, setCurrentUrl] = React.useState<string>('');

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


	React.useEffect(() => {
		const url = typeof window !== 'undefined' ? window.location.href : '';
		if (url) {
			setCurrentUrl(url);
		}
	}, []);


	return (
		<Layout handleScrollServicesIntoView={handleScrollServicesIntoView}>
			<SEO currentUrl={currentUrl} />
			<div ref={homeRef} className='home'>
				<Services />
				<Reviews />
				<Footer />
			</div>
		</Layout>
	);
};

export default Home;
