import * as React from 'react';
import { HeadFC } from 'gatsby';
import Nav from './Nav';
import Footer from './Footer';
import LoaderAnimation from './LoaderAnimation';

import '../styles/global.css';

type LayoutProps = {
	loading: boolean;
};

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children, loading }) => {
	return (
		<>
			{loading ? (
				<LoaderAnimation />
			) : (
				<div className='layout max-w-screen max-h-screen'>
					<Nav />

					{children}
					<Footer />
				</div>
			)}
		</>
	);
};

export default Layout;
