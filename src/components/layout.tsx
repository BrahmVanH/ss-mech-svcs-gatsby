import * as React from 'react';
import { Location } from '@reach/router';
import { HeadFC } from 'gatsby';
import Nav from './Nav';
import { Helmet } from 'react-helmet';
import { ArrowDownIcon } from 'evergreen-ui';
import Footer from './Footer';
import SEO from './SEO';

// import '../styles/layout.css';

const Layout: React.FC<{ children: React.ReactNode; handleScrollServicesIntoView?: () => void }> = ({ children, handleScrollServicesIntoView }) => {
	return (
		<div className='layout max-w-screen max-h-screen'>
			<Nav />
			{/* <button onClick={handleScrollServicesIntoView} className='arrow-icon-btn'>
				<ArrowDownIcon />
			</button> */}
			{children}
			<Footer />
		</div>
	);
};

export default Layout;

export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} />;
