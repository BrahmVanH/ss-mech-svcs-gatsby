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
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link href='https://fonts.googleapis.com/css2?family=Crete+Round:ital@0;1&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Zen+Kaku+Gothic+New&display=swap' rel='stylesheet' />
			</Helmet>
			<Nav />
			<button onClick={handleScrollServicesIntoView} className='arrow-icon-btn'>
				<ArrowDownIcon color={'#fff'} size={48} />
			</button>
			{children}
		</div>
	);
};

export default Layout;
