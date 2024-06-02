import { Link } from 'gatsby';

import React, { useEffect, useRef, useState } from 'react';
import Hero from './Hero';

import '../styles/Nav.css';
import GetQuoteBtn from './GetQuoteBtn';

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
			<nav ref={navRef}>
				<div className='nav-brand-container'>
					<img alt='brand badging - "stencil dog"' src='/images/odin-graceful-transparent.svg' />
					<div className='brand-text'>
						<h3>South Shore</h3>
						<p>Mechanical Services</p>
					</div>
				</div>
				<div className='nav-links-container'>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
				</div>
			<GetQuoteBtn />
			</nav>
			<Hero />
		</>
	);
};

export default Nav;
