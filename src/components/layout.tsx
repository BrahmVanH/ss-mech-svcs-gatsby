import React from 'react';
import Nav from './Nav';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='layout'>
			<Nav />
			{children}
		</div>
	);
};


export default Layout;