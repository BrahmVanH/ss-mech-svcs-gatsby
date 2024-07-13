import * as React from 'react';
import Layout from '../components/layout';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import Footer from '../components/Footer';

import 'normalize.css';
import '../styles/Home.css';
import SEO from '../components/SEO';

// To Do: Added breadcrumb structured data
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
			<div ref={homeRef} className='flex flex-col items-center justify-center bg-transparent'>
				<Services />
				<Reviews />
			</div>
		</Layout>
	);
};

export default Home;
