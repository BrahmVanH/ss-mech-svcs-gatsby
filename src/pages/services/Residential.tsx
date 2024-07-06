import * as React from 'react';
import { Link } from 'gatsby';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';

import '../../styles/Services.css';

import residentialServices from '../../lib/data/residentialServices.json';

const Residential: React.FC = () => {
	return (
		<Layout>
			<div className='services-page'>
				<h1>Residential Services</h1>

				{/* add section 'common signs that xxx needs service */}
				<div className='services-page-card-container'>
					{residentialServices.map((service) => (
						<ServicesCard key={service.name} title={service.name} description={service.description} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Residential;
