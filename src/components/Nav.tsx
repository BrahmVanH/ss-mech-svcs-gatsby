import { Link } from 'gatsby';

import React from 'react';
import Hero from './Hero';

import '../styles/Nav.css';
import GetQuoteBtn from './GetQuoteBtn';

import brand_image_transparent from '../images/odin_graceful_transparent.svg';

const Nav: React.FC = () => {
	const [isHome, setIsHome] = React.useState<boolean>(false);
	const [currentPath, setCurrentPath] = React.useState<string>('');
	const devUri = 'http://localhost:8000';

	const navRef = React.useRef<HTMLDivElement>(null);
	const homeRouteRef = React.useRef<HTMLDivElement>(null);
	const aboutRouteRef = React.useRef<HTMLDivElement>(null);
	const contactRouteRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		console.log('window.location.pathname:', window.location.pathname);
		if (window.location.pathname === '/' || window.location.pathname === ``) {
			setIsHome(true);
			navRef.current?.classList.add('home-nav');
			navRef.current?.classList.remove('about-nav');
			// homeRouteRef.current?.classList.add('nav-link-underline-active');
			homeRouteRef.current?.childNodes[0].
		} else if (window.location.pathname === `${devUri}/about`) {
			setIsHome(false);
			// homeRouteRef.current?.classList.remove('nav-link-underline-active');
			// aboutRouteRef.current?.classList.add('nav-link-underline-active');
			// contactRouteRef.current?.classList.remove('nav-link-underline-active');
			aboutRouteRef.current?.childNodes[0].classList.add('nav-link-underline-active');
			contactRouteRef.current?.childNodes[0].classList.remove('nav-link-underline-active');

		} else if (window.location.pathname === `${devUri}/contact`) {
			setIsHome(false);
			homeRouteRef.current?.classList.remove('nav-link-underline-active');
			aboutRouteRef.current?.classList.remove('nav-link-underline-active');
			contactRouteRef.current?.classList.add('nav-link-underline-active');
		}
	}, []);

	// React.useEffect(() => {
	// 	if (isHome) {
	// 		navRef.current?.classList.add('home-nav');
	// 		navRef.current?.classList.remove('about-nav');
	// 	}
	// }, [isHome]);

	return (
		<>
			<nav ref={navRef}>
				<div className='nav-brand-container'>
					<img alt='brand badging - "stencil dog"' src={brand_image_transparent} />
					<div className='brand-text'>
						<h1>South Shore</h1>
						<h1>Mechanical Services</h1>
					</div>
				</div>
				<div className='nav-links-container'>
					<div ref={homeRouteRef}>
						<Link to='/'>Home</Link>
					</div>
					<div ref={aboutRouteRef}>
						<Link to='/about'>About</Link>
					</div>
					<div ref={contactRouteRef}>
						<Link to='/contact'>Contact</Link>
					</div>
				</div>
				<GetQuoteBtn />
			</nav>
			<Hero />
		</>
	);
};

export default Nav;
