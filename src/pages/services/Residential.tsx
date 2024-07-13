import * as React from 'react';
import { Link } from 'gatsby';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';

// import '../../styles/Services.css';

import residentialServices from '../../lib/data/residentialServices.json';
import ScheduleServiceForm from '../../components/ScheduleServiceForm';

const Residential: React.FC = () => {
	return (
		<Layout>
			<div className='services-page w-full h-full flex flex-col justify-center items-center'>
				<h1>Residential Services</h1>

				{/* add section 'common signs that xxx needs service */}
				<div className='services-page-card-container w-[55%] grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))] auto-rows-[300px] gap-8 m-4 py-4 px-8'>
					{residentialServices.map((service) => (
						<ServicesCard key={service.name} title={service.name} description={service.description} />
					))}
				</div>
				<ScheduleServiceForm />
			</div>
		</Layout>
	);
};

export default Residential;
