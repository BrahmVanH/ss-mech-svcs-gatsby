import { Link } from 'gatsby';

import * as React from 'react';

import { ChevronDownIcon } from 'evergreen-ui';

import brand_image_transparent from '../images/svg/brand-image-black-cropped.svg';
import brand_image_white from '../images/svg/brand-image-white-cropped.svg';

const Nav: React.FC = () => {
	return (
		<nav className='bg-[#fff] bg-primary  flex justify-center sm:justify-between items-center w-full text-black z-[1000] p-2 absolute'>
			<Link to='/' className=' hidden sm:flex justify-center items-center lg:ml-4'>
				<img className='sm:hidden md:block md:w-[90px] mr-2' alt='south shore mechanical services branding its of a beautiful berner-aussie mix' src={brand_image_transparent} />

				<div className='sm:hidden lg:ml-2 lg:flex flex-col justify-center items-start text-left text-nowrap w-min'>
					<span className='m-0'>
						<h1 className=' mt-1 sm:mt-0.5 lg:mt-0.5 p-0  sm:text-3xl md:text-4xl lg:text-4xl'>South Shore</h1>
					</span>
					<span className='m-0'>
						<h1 className=' sm:my-0.5 p-0 leading-8 sm:text-3xl md:text-4xl lg:text-4xl'>Mechanical Services</h1>
					</span>
				</div>
			</Link>
			<div className=' flex flex-col xs:flex-row justify-evenly sm:justify-end items-center w-full my-2 sm:w-[60%] m-0 sm:mr-8 text-[24px] sm:text-[18px] text-center sm:text-left font-bolder [&>div>a]:mb-2 sm:[&>div>a]:text-3xl'>
				<div>
					<Link className='mb-4 no-underline p-4  hover:w-min hover:border-b-2 hover:border-[#ffffff3f] font-bold' to='/'>
						Home
					</Link>
				</div>

				<div className='z-[1000] group '>
					<span className='flex row flex-nowrap transition-all ease-in-out duration-1000  no-underline   py-0 px-4 '>
						<p className='text-[24px] sm:text-3xl'>Services</p>
						<ChevronDownIcon className=' ml-2 mb-2 sm:mb-1 max-h-[12px] self-end justify-self-center' size={12} />
					</span>

					<div
						id='servicesDropdownContent'
						className='hidden absolute w-full sm:w-min min-w-min  flex-col justify-center items-center bg-[#fff] border-b-2 border-l-2 border-r-2 border-primary transition-all ease-in-out duration-1000 cursor-pointer z-[1000] rounded-b-[10px] py-4 left-auto sm:left-auto group-hover:flex'>
						<div className='px-2 py-2'>
							<Link className='mb-4 no-underline px-4 py-2 text-[24px] sm:text-3xl  hover:w-min hover:border-b-2 hover:border-[#ffffff3f]' to='/services/Commercial'>
								Commercial
							</Link>
						</div>
						<div className='px-2 py-2'>
							<Link className='mb-4  no-underline px-4 py-2 text-[24px] sm:text-3xl  hover:w-min hover:border-b-2 hover:border-[#ffffff3f]' to='/services/Residential'>
								Residential
							</Link>
						</div>
					</div>
				</div>
				<div>
					<Link className='mb-4  no-underline p-4  hover:w-min hover:border-b-2 hover:border-[#ffffff3f]' to='/Contact'>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
