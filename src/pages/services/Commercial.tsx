import * as React from 'react';
import { HeadFC, Link } from 'gatsby';
import { graphql } from 'gatsby';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';

import commercialServices from '../../lib/data/commercialServices.json';
import ScheduleServiceForm from '../../components/ScheduleServiceForm';
import SEO from '../../components/SEO';

const Commercial: React.FC = () => {
	return (
		<Layout>
			<div className='w-full h-full flex flex-col justify-center items-center'>
				<h1 className='text-center sm:text-left text-[48px] text-800'>Commercial Services</h1>

				{/* add section 'common signs that xxx needs service */}
				<div className='w-screen flex flex-col  sm:flex-row justify-center items-start'>
					<div className='w-full sm:w-[55%] flex flex-col aspect-square sm:grid grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))] auto-rows-[300px] gap-8 m-0 sm:m-4 py-4 px-8'>
						{commercialServices.map((service) => (
							<ServicesCard key={service.name} title={service.name} description={service.description} img={service.img} />
						))}
					</div>
					<ScheduleServiceForm />
				</div>
				{process.env.NODE_ENV === 'production' ? (
					<></>
				) : (
					<Link
						to='/programs'
						className='maintenance-programs-link w-[80%] flex flex-col text-center bg-comp1 bg-opacity-55 text-white m-4 p-2 border h-[80%] border-black border-opacity-100 rounded-xl sm:hover:scale-105 sm:hover:shadow sm:hover:duration-500 '>
						{/* THIS NEEDS TO BE A WHOLE SEPARATE COMPONENT THAT HAS A HEADING AND A DESCRIPTION AND A BUTTON INSTEAD OF JUST A BUTTON HOLDING TEXT */}
						<h3 className='text-nowrap'>Tailored Maintenance Programs</h3>
						<p className='px-2 py-0'>We'll work with you to build a maintenance plan custom fit to your business's needs with flexible billing schedules. </p>
					</Link>
				)}
			</div>
		</Layout>
	);
};

export default Commercial;

export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='Commercial Services' />;

