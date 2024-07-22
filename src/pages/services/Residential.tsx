import * as React from 'react';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';

import residentialServices from '../../lib/data/residentialServices.json';
import ScheduleServiceForm from '../../components/ScheduleServiceForm';

const Residential: React.FC = () => {
	return (
		<Layout>
			<div className='w-full h-full flex flex-col sm:flex-row justify-center items-start'>
				<h1 className='text-center sm:test-left text-[48px] text-800'>Residential Services</h1>

				<div className='w-screen flex flex-col sm:flex-row  justify-center items-start'>
					{/* add section 'common signs that xxx needs service */}
					<div className='w-full sm:w-[55%] flex flex-col aspect-square  sm:grid grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))] auto-rows-[300px] gap-8 m-0 sm:m-4 py-4 px-8'>
						{residentialServices.map((service) => (
							<ServicesCard key={service.name} title={service.name} description={service.description} img={service.img} />
						))}
					</div>
					<ScheduleServiceForm />
				</div>
			</div>
		</Layout>
	);
};

export default Residential;
