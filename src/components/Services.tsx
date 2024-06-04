import React from 'react';

import '../styles/Services.css';

import tanklessHotWater from '../images/tankless-hotwater-landscape.jpg';
import dryerService from '../images/dryer-repair-landscape.jpg';

const Services: React.FC = () => {
	const [showLearnMore, setShowLearnMore] = React.useState<boolean>(false);


	return (
		<div className='services-container'>
			{/* Switch to link with dynamic route to service page */}
			<div className='services-card'>
				<img className='img-left-border-radius-20' alt='Plumbing for tankless hot water heater being serviced' src={tanklessHotWater} />
				<div className='services-card-text'>
					<h3>Commercial Maintenance & Repair</h3>

					<p>From basic repairs to long-term building maintenance, we will help make sure your commercial space...</p>
				</div>
			</div>
			{/* Switch to link with dynamic route to service page */}
			<div className='services-card '>
				<div className='services-card-text'>
					<h3>Residential *Handywork*</h3>
					<p>Leaky faucets to furnace repair, we offer the full range of home repair and improvement for both single- and multi-family homes</p>
				</div>
				<img className='img-right-border-radius-20' alt='close up of person working on clothing dryer' src={dryerService} />
			</div>
		</div>
	);
};

export default Services;
