import * as React from 'react';
import { HeadFC } from 'gatsby';
import Nav from './Nav';
import Footer from './Footer';

// Commented out footer and nav imports and usage
const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div className='layout max-w-screen max-h-screen'>
			<Nav />

			{children}
			<Footer />
		</div>
	);
};

export default Layout;
