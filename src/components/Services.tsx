import React from 'react';

import '../styles/Services.css';

import tanklessHotWater from '../images/tankless-hotwater-landscape.jpg';
import dryerService from '../images/dryer-repair-landscape.jpg';

const Services: React.FC = () => {
	const [showLearnMore, setShowLearnMore] = React.useState<boolean>(false);


	return (
		<div id='servicesComponent' className='services-container'>
			{/* Switch to link with dynamic route to service page */}
			<div className='services-card'>
				<img className='img-left-border-radius-20' alt='Plumbing for tankless hot water heater being serviced' src={tanklessHotWater} />
				<div className='services-card-text'>
					<h2>Commercial Maintenance & Repair</h2>

					<p>From basic repairs to long-term building maintenance, we will help make managing your commercial space as easy as ever.</p>
				</div>
			</div>
			{/* Switch to link with dynamic route to service page */}
			<div className='services-card '>
				<div className='services-card-text'>
					<h2>Home Repairs and Services</h2>
					<p>We offer a wide range of services to help home owners and property managers alike keep their guests and their families comfortable and safe.</p>
				</div>
				<img className='img-right-border-radius-20' alt='close up of person working on clothing dryer' src={dryerService} />
			</div>
		</div>
	);
};

export default Services;
