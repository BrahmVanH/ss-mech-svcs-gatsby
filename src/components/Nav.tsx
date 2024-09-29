import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

import * as React from 'react';

import { ChevronDownIcon } from 'evergreen-ui';

import brand_image_transparent from '../images/svg/brand-image-black-cropped.svg';
import brand_image_white from '../images/svg/brand-image-white-cropped.svg';

const servicesDropdownBgNotHome = 'bg-gradient-to-b from-services-dropdown-grad-stop-1 to-services-dropdown-grad-stop-2 to-services-dropdown-grad-stop-3 to-services-dropdown-grad-stop-4';
const servicesDropdownBgHome = 'bg-services-dropdown-home-bg';

const Nav: React.FC = () => {
	const location = useLocation();
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
		if (location.pathname === '/' || location.pathname === ``) {
			setIsHome(true);
			navRef.current?.classList.add('home-nav');
			setServicesDropdownBg(servicesDropdownBgHome);
			navRef.current?.classList.remove('not-home-nav');
			// homeRouteRef.current?.classList.add('active-nav-link');
			// aboutRouteRef.current?.classList.remove('active-nav-link');
			// contactRouteRef.current?.classList.remove('active-nav-link');
			// servicesDropdown.current?.classList.remove('active-nav-item');
		} else if (location.pathname === `/services/Commercial/` || location.pathname === `/services/Residential/`) {
			setIsHome(false);
			navRef.current?.classList.add('not-home-nav');
			navRef.current?.classList.remove('home-nav');
			setServicesDropdownBg(servicesDropdownBgNotHome);

			// homeRouteRef.current?.classList.remove('active-nav-link');
			// contactRouteRef.current?.classList.remove('active-nav-link');
			// servicesDropdown.current?.classList.add('active-nav-item');
		} else if (location.pathname === `/Contact/`) {
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
		<nav ref={navRef} className='flex justify-center sm:justify-between items-center w-full text-white z-[1000] p-2 absolute'>
			<Link to='/' className=' hidden sm:flex justify-center items-center lg:ml-4'>
				{isHome ? (
					<img className='sm:hidden md:block md:w-[90px] mr-2' alt='south shore mechanical services branding its of a beautiful berner-aussie mix' src={brand_image_transparent} />
				) : (
					<img className='sm:hidden md:block md:w-[90px] mr-2' alt='south shore mechanical services branding its of a beautiful berner-aussie mix' src={brand_image_white} />
				)}
				<div className='sm:hidden lg:ml-2 lg:flex flex-col justify-center items-start text-left text-nowrap w-min'>
					<span className='m-0'>
						<h1 className=' mt-1 sm:mt-0.5 lg:mt-0.5 p-0  sm:text-3xl md:text-4xl lg:text-4xl'>South Shore</h1>
					</span>
					<span className='m-0'>
						<h1 className=' sm:my-0.5 p-0 leading-8 sm:text-3xl md:text-4xl lg:text-4xl'>Mechanical Services</h1>
					</span>
				</div>
			</Link>
			<div className=' flex flex-col xs:flex-row justify-evenly sm:justify-end items-center w-full my-2 sm:w-[60%] m-0 sm:mr-8 text-[24px] sm:text-[18px] text-center sm"text-left [&>div>a]:mb-2 sm:[&>div>a]:text-3xl'>
				<div ref={homeRouteRef}>
					<Link className='mb-4 text-white no-underline p-4  hover:w-min hover:border-b-2 hover:border-[#ffffff3f]' to='/'>
						Home
					</Link>
				</div>

				<div ref={servicesDropdown} className='z-[1000] group '>
					<span className='flex row flex-nowrap transition-all ease-in-out duration-1000 text-white no-underline   py-0 px-4 '>
						<p className='text-[24px] sm:text-3xl'>Services</p>
						<ChevronDownIcon className=' ml-2 mb-2 sm:mb-1 max-h-[12px] self-end justify-self-center' size={12} />
					</span>

					<div
						id='servicesDropdownContent'
						className={` hidden absolute w-full sm:w-min min-w-min  flex-col justify-center items-center ${servicesDropdownBg} transition-all ease-in-out duration-1000 cursor-pointer z-[1000] rounded-b-[10px] py-4 left-0 sm:left-auto group-hover:flex`}>
						<div className='px-2 py-2' ref={commercialRoutesRef}>
							<Link className='mb-4 text-white no-underline px-4 py-2 text-[24px] sm:text-3xl  hover:w-min hover:border-b-2 hover:border-[#ffffff3f]' to='/services/Commercial'>
								Commercial
							</Link>
						</div>
						<div className='px-2 py-2' ref={residentialRoutesRef}>
							<Link className='mb-4 text-white no-underline px-4 py-2 text-[24px] sm:text-3xl  hover:w-min hover:border-b-2 hover:border-[#ffffff3f]' to='/services/Residential'>
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
		</nav>
	);
};

export default Nav;
