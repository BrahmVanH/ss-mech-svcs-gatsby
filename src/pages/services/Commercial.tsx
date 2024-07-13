import * as React from 'react';
import { Link } from 'gatsby';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';

// import '../../styles/Services.css';

import commercialServices from '../../lib/data/commercialServices.json';
import ScheduleServiceForm from '../../components/ScheduleServiceForm';

const Commercial: React.FC = () => {
	return (
		<Layout>
			<div className='services-page w-full h-full flex flex-col justify-center items-center'>
				<h1>Commercial Services</h1>
				<Link
					to='/programs'
					className='maintenance-programs-link w-50 flex flex-col text-center bg-comp1 bg-opacity-55 text-white m-4 p-2 border border-black border-opacity-100 rounded-xl sm:hover:scale-105 sm:hover:shadow sm:hover:duration-500 '>
					{/* THIS NEEDS TO BE A WHOLE SEPARATE COMPONENT THAT HAS A HEADING AND A DESCRIPTION AND A BUTTON INSTEAD OF JUST A BUTTON HOLDING TEXT */}
					<h3 className='text-nowrap'>Tailored Maintenance Programs</h3>
					<p>Let us take care of the boring stuff. We'll work with you to build a maintenance plan custom fit to your business's needs with flexible billing schedules. </p>
				</Link>
				{/* add section 'common signs that xxx needs service */}
				<div className='services-page-content w-full flex justify-center items-start'>
					<div className='services-page-card-container w-[55%] grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))] auto-rows-[300px] gap-8 m-4 py-4 px-8'>
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
