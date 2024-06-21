import React from 'react';
import Nav from './Nav';
import { Helmet } from 'react-helmet';
import { ArrowDownIcon } from 'evergreen-ui';


const Layout: React.FC<{ children: React.ReactNode; handleScrollServicesIntoView?: () => void }> = ({ children, handleScrollServicesIntoView }) => {
	return (
		<div className='layout'>
			<Nav />
			<button onClick={handleScrollServicesIntoView} className='arrow-icon-btn'>
				<ArrowDownIcon />
			</button>
			{children}
		</div>
	);
};

export default Layout;
