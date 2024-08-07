import * as React from 'react';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';


import residentialServices from '../../lib/data/residentialServices.json';
import ScheduleServiceForm from '../../components/ScheduleServiceForm';
import SEO from '../../components/SEO';
import { HeadFC } from 'gatsby';

const Residential: React.FC = () => {
	return (
		<Layout>
			<div className='w-full h-full flex flex-col justify-center items-center'>
				<h1 className='text-center sm:test-left text-[48px] text-800'>Residential Services</h1>

				<div className='w-screen flex flex-col sm:flex-row  justify-center items-start'>
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

export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='Residential Services' />;

