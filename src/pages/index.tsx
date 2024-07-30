import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/layout';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import SEO from '../components/SEO';

import 'normalize.css';

// To Do: Added breadcrumb structured data
const Home: React.FC = () => {
	const homeRef = React.useRef<HTMLDivElement>(null);

	return (
		<Layout>
			<div ref={homeRef} className='flex flex-col items-center justify-center bg-transparent'>
				<Services />
				{/* <Reviews /> */}
			</div>
		</Layout>
	);
};

export default Home;


export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='South Shore Mechanical Services' />;

