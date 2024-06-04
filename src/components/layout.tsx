import React from 'react';
import Nav from './Nav';
import { Helmet } from 'react-helmet';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='layout'>
			<Helmet>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link href='https://fonts.googleapis.com/css2?family=Crete+Round:ital@0;1&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Zen+Kaku+Gothic+New&display=swap' rel='stylesheet' />
			</Helmet>
			<Nav />
			{children}
		</div>
	);
};

export default Layout;
