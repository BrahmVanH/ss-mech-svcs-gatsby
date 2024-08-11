import * as React from 'react';
import { Link } from 'gatsby';

interface ServicesProps {
	imgKeys: {
		commercial: {
			alt: string;
			img: string;
		};
		residential: {
			alt: string;
			img: string;
		};
	};
}

const Services: React.FC<ServicesProps> = ({ imgKeys }) => {
	return (
		<div id='servicesComponent' className='services-container p-0 sm:py-12 w-[90%] my-0 mx-auto'>
			<Link
				to={'/services/Commercial'}
				className='services-card w-full sm:w-[95%] my-4 mx-auto flex flex-col sm:flex-row cursor-pointer shadow-sm shadow-[#00000042] rounded-2xl sm:hover:scale-105 sm:hover:shadow sm:hover:duration-500'>
				<img className='img-left-border-radius-20 w-full sm:w-[45%] sm:rounded-l-2xl rounded-r-2xl ' alt={imgKeys.commercial.alt} src={imgKeys.commercial.img} />
				<div className='services-card-text text-center flex flex-col justify-center'>
					<h3 className='my-4 mx-auto '>Commercial Maintenance & Repair</h3>

					<p className='w-3/4 mb-8 sm:my-4 mx-auto font-base '>From basic repairs to long-term building maintenance, we will help make managing your commercial space as easy as ever.</p>
				</div>
			</Link>
			<Link
				to={'/services/Residential'}
				className='services-card w-full sm:w-[95%] my-4 mx-auto flex flex-col-reverse sm:flex-row cursor-pointer shadow-sm shadow-[#00000042] rounded-2xl sm:hover:scale-105 sm:hover:shadow sm:hover:duration-500'>
				<div className='services-card-text text-center flex flex-col justify-center'>
					<h3 className='my-4 mx-auto'>Home Repairs and Services</h3>
					<p className='w-3/4 mb-8 sm:my-4 mx-auto font-base'>
						We offer a wide range of services to help home owners and property managers alike keep their guests and their families comfortable and safe.
					</p>
				</div>
				<img className='img-right-border-radius-20 w-full sm:w-[45%] rounded-t-2xl sm:rounded-r-2xl' alt={imgKeys.residential.alt} src={imgKeys.residential.img} />
			</Link>
		</div>
	);
};

export default Services;
