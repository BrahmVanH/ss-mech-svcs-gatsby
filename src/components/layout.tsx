import * as React from 'react';
import Nav from './Nav';
import { Helmet } from 'react-helmet';
import { ArrowDownIcon } from 'evergreen-ui';
import Footer from './Footer';

import '../styles/layout.css';

const Layout: React.FC<{ children: React.ReactNode; handleScrollServicesIntoView?: () => void }> = ({ children, handleScrollServicesIntoView }) => {
	return (
		<div className='layout'>
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
