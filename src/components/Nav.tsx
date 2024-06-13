import { Link } from 'gatsby';

import React from 'react';
import Hero from './Hero';
import GetQuoteBtn from './GetQuoteBtn';

import '../styles/Nav.css';

import brand_image_transparent from '../images/svg/odin_graceful_transparent.svg';

const Nav: React.FC = () => {
	const [isHome, setIsHome] = React.useState<boolean>(false);
	const [currentPath, setCurrentPath] = React.useState<string>('');
	const devUri = 'http://localhost:8000';

	const navRef = React.useRef<HTMLDivElement>(null);
	const homeRouteRef = React.useRef<HTMLDivElement>(null);
	const aboutRouteRef = React.useRef<HTMLDivElement>(null);
	const contactRouteRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (window.location.pathname === '/' || window.location.pathname === ``) {
			setIsHome(true);
			navRef.current?.classList.add('home-nav');
			navRef.current?.classList.remove('not-home-nav');
			homeRouteRef.current?.classList.add('active-nav-link');
			aboutRouteRef.current?.classList.remove('active-nav-link');
			contactRouteRef.current?.classList.remove('active-nav-link');
		} else if (window.location.pathname === `/about`) {
			setIsHome(false);
			navRef.current?.classList.add('not-home-nav');
			navRef.current?.classList.remove('home-nav');
			aboutRouteRef.current?.classList.add('active-nav-link');
			homeRouteRef.current?.classList.remove('active-nav-link');
			contactRouteRef.current?.classList.remove('active-nav-link');
		} else if (window.location.pathname === `/contact`) {
			setIsHome(false);
			navRef.current?.classList.add('not-home-nav');
			navRef.current?.classList.remove('home-nav');
			contactRouteRef.current?.classList.add('active-nav-link');
			homeRouteRef.current?.classList.remove('active-nav-link');
			aboutRouteRef.current?.classList.remove('active-nav-link');
		}
	}, []);

	// React.useEffect(() => {
	// 	if (isHome) {
	// 		navRef.current?.classList.add('home-nav');
	// 		navRef.current?.classList.remove('not-home-nav');
	// 	} else {
	// 		navRef.current?.classList.add('not-home-nav');
	// 		navRef.current?.classList.remove('home-nav');

	// 	}
	// }, [isHome]);

	return (
		<>
			<nav ref={navRef}>
				<Link to='/' className='nav-brand-container'>
					<img alt='brand badging - "stencil dog"' src={brand_image_transparent} />
					<div className='brand-text'>
						<h1>South Shore</h1>
						<h1>Mechanical Services</h1>
					</div>
				</Link>
				<div className='nav-links-container'>
					<div ref={homeRouteRef}>
						<Link to='/'>Home</Link>
					</div>
					<div ref={aboutRouteRef}>
						<Link to='/404'>About</Link>
					</div>
					<div ref={contactRouteRef}>
						<Link to='/404'>Contact</Link>
					</div>
				</div>
				<GetQuoteBtn />
			</nav>
			<Hero />
		</>
	);
};

export default Nav;
