import { Link } from 'gatsby';

import * as React from 'react';
import Hero from './Hero';
import GetQuoteBtn from './GetQuoteBtn';

import { ChevronDownIcon, Icon } from 'evergreen-ui';

import '../styles/Nav.css';

import brand_image_transparent from '../images/svg/odin_graceful_transparent.svg';
import brand_image_white from '../images/svg/odin_graceful_bg-transparent_white-fill.svg';

const Nav: React.FC = () => {
	const [isHome, setIsHome] = React.useState<boolean>(false);

	const navRef = React.useRef<HTMLDivElement>(null);
	const homeRouteRef = React.useRef<HTMLDivElement>(null);
	const aboutRouteRef = React.useRef<HTMLDivElement>(null);
	const commercialRoutesRef = React.useRef<HTMLDivElement>(null);
	const residentialRoutesRef = React.useRef<HTMLDivElement>(null);
	const contactRouteRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (window.location.pathname === '/' || window.location.pathname === ``) {
			setIsHome(true);
			navRef.current?.classList.add('home-nav');
			navRef.current?.classList.remove('not-home-nav');
			homeRouteRef.current?.classList.add('active-nav-link');
			aboutRouteRef.current?.classList.remove('active-nav-link');
			contactRouteRef.current?.classList.remove('active-nav-link');
			residentialRoutesRef.current?.classList.remove('active-nav-link');
			commercialRoutesRef.current?.classList.remove('active-nav-link');
		} else if (window.location.pathname === `/services/Commercial/`) {
			setIsHome(false);
			navRef.current?.classList.add('not-home-nav');
			navRef.current?.classList.remove('home-nav');
			homeRouteRef.current?.classList.remove('active-nav-link');
			contactRouteRef.current?.classList.remove('active-nav-link');
			residentialRoutesRef.current?.classList.remove('active-nav-link');
			commercialRoutesRef.current?.classList.add('active-nav-link');
		} else if (window.location.pathname === `/services/Residential/`) {
			setIsHome(false);
			navRef.current?.classList.add('not-home-nav');
			navRef.current?.classList.remove('home-nav');
			homeRouteRef.current?.classList.remove('active-nav-link');
			contactRouteRef.current?.classList.remove('active-nav-link');
			commercialRoutesRef.current?.classList.remove('active-nav-link');
			residentialRoutesRef.current?.classList.add('active-nav-link');
		} else if (window.location.pathname === `/Contact/`) {
			setIsHome(false);
			navRef.current?.classList.add('not-home-nav');
			navRef.current?.classList.remove('home-nav');
			contactRouteRef.current?.classList.add('active-nav-link');
			homeRouteRef.current?.classList.remove('active-nav-link');
			aboutRouteRef.current?.classList.remove('active-nav-link');
			residentialRoutesRef.current?.classList.remove('active-nav-link');
			commercialRoutesRef.current?.classList.remove('active-nav-link');
		}
	}, []);

	React.useEffect(() => {
		if (isHome) {
			navRef.current?.classList.add('home-nav');
			navRef.current?.classList.remove('not-home-nav');
		} else {
			navRef.current?.classList.add('not-home-nav');
			navRef.current?.classList.remove('home-nav');
		}
	}, [isHome]);

	return (
		<>
			<nav ref={navRef}>
				<Link to='/' className='nav-brand-container'>
					{isHome ? <img alt='brand badging - "stencil dog"' src={brand_image_transparent} /> : <img alt='brand badging - "stencil dog"' src={brand_image_white} />}
					<div className='brand-text'>
						<h1 className='brand-text'>
							<span>South Shore</span>
							<span>Mechanical Services</span>
						</h1>
					</div>
				</Link>
				<div className='nav-links-container'>
					<div ref={homeRouteRef}>
						<Link to='/'>Home</Link>
					</div>
					<div className='services-dropdown'>
						<p>
							Services
							<span className='nav-dropdown-down-icon'>
								<Icon icon={ChevronDownIcon} size={12} />
							</span>
						</p>
						<div className='services-dropdown-content'>
							<div ref={commercialRoutesRef}>
								<Link to='/services/Commercial'>Commercial</Link>
							</div>
							<div ref={residentialRoutesRef}>
								<Link to='/services/Residential'>Residential</Link>
							</div>
						</div>
					</div>
					<div ref={contactRouteRef}>
						<Link to='/Contact'>Contact</Link>
					</div>
				</div>
				<GetQuoteBtn />
			</nav>
			{isHome ? <Hero /> : <></>}
		</>
	);
};

export default Nav;
