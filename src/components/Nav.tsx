import { Link } from 'gatsby';

import React, { useEffect, useRef, useState } from 'react';
import Hero from './Hero';

import '../styles/Nav.css';

const Nav: React.FC = () => {
	const [isHome, setIsHome] = useState<boolean>(false);

	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (window.location.pathname === '/') {
			setIsHome(true);
		}
	}, []);

	useEffect(() => {
		if (isHome) {
			navRef.current?.classList.add('home-nav');
			navRef.current?.classList.remove('about-nav');
		}
	}, [isHome]);

	return (
		<>
			<Hero />
			<nav ref={navRef}>
				<div className='brand-container'>
					<h3>South Shore</h3>
					<p>Mechanical Services</p>
				</div>
				<div className='nav-links'>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
				</div>
			</nav>
		</>
	);
};

export default Nav;
