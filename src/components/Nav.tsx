import { Link } from 'gatsby';

import * as React from 'react';
import Hero from './Hero';
import GetQuoteBtn from './GetQuoteBtn';

import { ChevronDownIcon, Icon } from 'evergreen-ui';

// import '../styles/Nav.css';

import brand_image_transparent from '../images/svg/odin_graceful_transparent.svg';
import brand_image_white from '../images/svg/odin_graceful_bg-transparent_white-fill.svg';
import { set } from 'react-hook-form';

const servicesDropdownBgNotHome = 'bg-gradient-to-b from-services-dropdown-grad-stop-1 to-services-dropdown-grad-stop-2 to-services-dropdown-grad-stop-3 to-services-dropdown-grad-stop-4';
const servicesDropdownBgHome = 'bg-services-dropdown-home-bg';

const Nav: React.FC = () => {
	const [isHome, setIsHome] = React.useState<boolean>(false);
	const [servicesDropdownBg, setServicesDropdownBg] = React.useState<string>(servicesDropdownBgHome);

	const navRef = React.useRef<HTMLDivElement>(null);
	const homeRouteRef = React.useRef<HTMLDivElement>(null);
	const aboutRouteRef = React.useRef<HTMLDivElement>(null);
	const servicesDropdown = React.useRef<HTMLDivElement>(null);
	const commercialRoutesRef = React.useRef<HTMLDivElement>(null);
	const residentialRoutesRef = React.useRef<HTMLDivElement>(null);
	const contactRouteRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (window.location.pathname === '/' || window.location.pathname === ``) {
			setIsHome(true);
			navRef.current?.classList.add('home-nav');
			setServicesDropdownBg(servicesDropdownBgHome);
			navRef.current?.classList.remove('not-home-nav');
			// homeRouteRef.current?.classList.add('active-nav-link');
			// aboutRouteRef.current?.classList.remove('active-nav-link');
			// contactRouteRef.current?.classList.remove('active-nav-link');
			// servicesDropdown.current?.classList.remove('active-nav-item');
		} else if (window.location.pathname === `/services/Commercial/` || window.location.pathname === `/services/Residential/`) {
			setIsHome(false);
			navRef.current?.classList.add('not-home-nav');
			navRef.current?.classList.remove('home-nav');
			setServicesDropdownBg(servicesDropdownBgNotHome);

			// homeRouteRef.current?.classList.remove('active-nav-link');
			// contactRouteRef.current?.classList.remove('active-nav-link');
			// servicesDropdown.current?.classList.add('active-nav-item');
		} else if (window.location.pathname === `/Contact/`) {
			setIsHome(false);
			navRef.current?.classList.add('not-home-nav');
			navRef.current?.classList.remove('home-nav');
			setServicesDropdownBg(servicesDropdownBgNotHome);

			// contactRouteRef.current?.classList.add('active-nav-link');
			// homeRouteRef.current?.classList.remove('active-nav-link');
			// aboutRouteRef.current?.classList.remove('active-nav-link');
			// servicesDropdown.current?.classList.remove('active-nav-item');
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
			<nav ref={navRef} className='hidden sm:flex justify-between items-center w-full text-white z-[1000] p-2 absolute'>
				<Link to='/' className='nav-brand-container flex justify-center items-center ml-8'>
					{isHome ? (
						<img className='max-h-[90px] mr-4' alt='brand badging - "stencil dog"' src={brand_image_transparent} />
					) : (
						<img className='max-h-[90px] mr-4' alt='brand badging - "stencil dog"' src={brand_image_white} />
					)}
					<div className='brand-text flex flex-col justify-center items-start text-left text-nowrap'>
						<h1 className='brand-text m-0 p-0 leading-8'>
							<span className='m-0 text-[28px]'>South Shore</span>
							<span className='m-0 text-[28px]'> Mechanical Services</span>
						</h1>
					</div>
				</Link>
				<div className='nav-links-container flex justify-end items-center w-[60%] mr-8 text-[18px]'>
					<div ref={homeRouteRef}>
						<Link className='mb-4 text-white no-underline p-4  hover:w-min hover:border-b-2 hover:border-[#ffffff3f]' to='/'>
							Home
						</Link>
					</div>

					<div ref={servicesDropdown} className='z-[1000] group'>
						<p className='transition-all ease-in-out duration-1000 text-white no-underline text-[18px] py-0 px-4 '>
							<span>Services</span>
							<Icon className='nav-dropdown-down-icon ml-2' icon={ChevronDownIcon} size={12} />
						</p>
						<div
							id='servicesDropdownContent'
							className={`services-dropdown-content hidden absolute min-w-min flex-col justify-center items-center ${servicesDropdownBg} transition-all ease-in-out duration-1000 cursor-pointer z-[1000] rounded-b-[10px] py-4 group-hover:flex`}>
							<div className='px-2 py-2' ref={commercialRoutesRef}>
								<Link className='mb-4 text-white no-underline px-4 py-2  hover:w-min hover:border-b-2 hover:border-[#ffffff3f]' to='/services/Commercial'>
									Commercial
								</Link>
							</div>
							<div className='px-2 py-2' ref={residentialRoutesRef}>
								<Link className='mb-4 text-white no-underline px-4 py-2  hover:w-min hover:border-b-2 hover:border-[#ffffff3f]' to='/services/Residential'>
									Residential
								</Link>
							</div>
						</div>
					</div>
					<div ref={contactRouteRef}>
						<Link className='mb-4 text-white no-underline p-4  hover:w-min hover:border-b-2 hover:border-[#ffffff3f]' to='/Contact'>
							Contact
						</Link>
					</div>
				</div>
				<GetQuoteBtn />
			</nav>
			{isHome ? <Hero /> : <></>}
		</>
	);
};

export default Nav;
