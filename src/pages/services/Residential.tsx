import * as React from 'react';
import { Link } from 'gatsby';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';

import residentialServices from '../../lib/data/residentialServices.json';
import ScheduleServiceForm from '../../components/ScheduleServiceForm';

const Residential: React.FC = () => {
	return (
		<Layout>
			<div className='w-screen h-full flex flex-col justify-center items-center'>
				<h1 className='text-[48px]'>Residential Services</h1>

				<div className='w-full flex justify-center items-start'>
					{/* add section 'common signs that xxx needs service */}
					<div className='w-[55%] grid grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))] auto-rows-[300px] gap-8 m-4 py-4 px-8'>
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
