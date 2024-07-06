import * as React from 'react';
import { Link } from 'gatsby';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';

import '../../styles/Services.css';

import commercialServices from '../../lib/data/commercialServices.json';

const Commercial: React.FC = () => {
	return (
		<Layout>
			<div className='services-page'>
				<h1>Commercial Services</h1>
				<Link to='/programs' className='maintenance-programs-link'>
					<h3>Maintenance Programs</h3>
				</Link>
				{/* add section 'common signs that xxx needs service */}
				<div className='services-page-card-container'>
					{commercialServices.map((service) => (
						<ServicesCard key={service.name} title={service.name} description={service.description} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Commercial;
