import * as React from 'react';
import { Link } from 'gatsby';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';

import '../../styles/Services.css';

import commercialServices from '../../lib/data/commercialServices.json';
import ScheduleServiceForm from '../../components/ScheduleServiceForm';

const Commercial: React.FC = () => {
	return (
		<Layout>
			<div className='services-page'>
				<h1>Commercial Services</h1>
				<Link to='/programs' className='maintenance-programs-link w-50 flex flex-col text-center'>
					<h3>Tailored Maintenance Programs</h3>
					<p>Let us take care of the boring stuff. We'll work with you to build a maintenance plan custom fit to your business's needs with flexibly billing schedules. </p>
				</Link>
				{/* add section 'common signs that xxx needs service */}
				<div className='services-page-content'>
					<div className='services-page-card-container'>
						{commercialServices.map((service) => (
							<ServicesCard key={service.name} title={service.name} description={service.description} />
						))}
					</div>
					<ScheduleServiceForm />
				</div>
			</div>
		</Layout>
	);
};

export default Commercial;
