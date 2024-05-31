import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
	return (
		<div className='services'>
			<h2>Our Services</h2>
			<div className='content'>
				<div className='service-card'>
					<div className='service-info'>
						<h3>Heating</h3>
						<p>We provide heating services for both residential and commercial properties. Our services include furnace repair, installation, and maintenance.</p>
					</div>
				</div>
				<div className='service-card'>
					<div className='service-info'>
						<h3>Cooling</h3>
						<p>Our cooling services include air conditioning repair, installation, and maintenance. We also provide refrigeration services for commercial properties.</p>
					</div>
				</div>
				<div className='service-card'>
					<div className='service-info'>
						<h3>Plumbing</h3>
						<p>Our plumbing services include pipe repair, installation, and maintenance. We also provide drain cleaning services.</p>
					</div>
				</div>
				<div className='service-card'>
					<div className='service-info'>
						<h3>Electrical</h3>
						<p>Our electrical services include wiring installation, repair, and maintenance. We also provide data cabling services.</p>
					</div>
					<div className='service-card'>
						<div className='service-info'>
							<h3>Appliance Repair</h3>
							<p>We provide appliance repair services for all major brands. Our services include refrigerator repair, oven repair, and washer/dryer repair.</p>
						</div>
					</div>
					<div className='service-card'>
						<div className='service-info'>
							<h3>TV Mounting</h3>
							<p>Our TV mounting services include wall mounting, ceiling mounting, and stand assembly. We also provide cable management services.</p>
						</div>
					</div>
					<div className='service-card'>
						<div className='service-info'>
							<h3>Ethernet & Data</h3>
							<p>Our ethernet and data services include network installation, repair, and maintenance. We also provide data recovery services.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
