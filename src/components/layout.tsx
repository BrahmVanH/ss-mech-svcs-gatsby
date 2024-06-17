import React from 'react';
import Nav from './Nav';
import { Helmet } from 'react-helmet';
import { ArrowDownIcon } from 'evergreen-ui';

type LayoutProps = {
	children: React.ReactNode;
	handleScrollServicesIntoView: () => void;
};

const Layout: React.FC<{ children: React.ReactNode; handleScrollServicesIntoView: () => void }> = ({ children, handleScrollServicesIntoView }) => {
	return (
		<div className='layout'>
			<Helmet>
				
			</Helmet>
			<Nav />
			<button onClick={handleScrollServicesIntoView} className='arrow-icon-btn'>
				<ArrowDownIcon />
			</button>
			{children}
		</div>
	);
};

export default Layout;
