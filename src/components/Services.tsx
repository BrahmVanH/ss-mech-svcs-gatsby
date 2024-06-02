import React from 'react';
import '../styles/Services.css';

import tanklessHotWater from '../images/tankless-hotwater-landscape.jpg';
import dryerService from '../images/dryer-repair-landscape.jpg';

const Services: React.FC = () => {
	const [showLearnMore, setShowLearnMore] = React.useState<boolean>(false);

	const learnMoreCircleRef = React.useRef<HTMLDivElement>(null);

	const handleSetShowLearnMore = () => {
		setShowLearnMore(!showLearnMore);
	};

	React.useEffect(() => {
		if (showLearnMore) {
			learnMoreCircleRef.current?.setAttribute('hidden', 'false');
		} else {
			learnMoreCircleRef.current?.setAttribute('hidden', 'true');
		}
	}, [showLearnMore]);

	return (
		<div className='services-container'>
			{/* Switch to link with dynamic route to service page */}
			<div onMouseEnter={handleSetShowLearnMore} onMouseLeave={handleSetShowLearnMore} className='services-card'>
				<img alt='Plumbing for tankless hot water heater being serviced' src={tanklessHotWater} />
				<div className='services-card-text'>
					<h3>Commercial Maintenance & Repair</h3>
					<p>From basic repairs to long-term building maintenance, we will help make sure your commercial space...</p>
					<div className='learn-more-container'>
						<div hidden ref={learnMoreCircleRef} className='learn-more-circle'>
							<p>Learn More</p>
						</div>
					</div>
				</div>
			</div>
			{/* Switch to link with dynamic route to service page */}
			<div onMouseEnter={handleSetShowLearnMore} onMouseLeave={handleSetShowLearnMore} className='services-card'>
				<div className='services-card-text'>
					<h3>Residential *Handywork*</h3>
					<p>Leaky faucets to furnace repair, we offer the full range of home repair and improvement for both single- and multi-family homes</p>
					<div className='learn-more-container'>
						<div hidden ref={learnMoreCircleRef} className='learn-more-circle'>
							<p>Learn More</p>
						</div>
					</div>
				</div>
				<img alt='close up of person working on clothing dryer' src={dryerService} />
			</div>
		</div>
	);
};

export default Services;
