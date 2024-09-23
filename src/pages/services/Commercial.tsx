import * as Sentry from '@sentry/react';
import * as React from 'react';

import { HeadFC, Link } from 'gatsby';
import { useQuery } from '@apollo/client';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';
import ScheduleServiceForm from '../../components/ScheduleServiceForm';
import SEO from '../../components/SEO';


import { GET_PRESIGNED_S3_URLS } from '../../lib/graphql/queries';

import { ImgObj } from '../../lib/__generated__/graphql';
import { ServicesCardData } from '../../types';

import commercialPageData from '../../lib/data/CommercialPage.json';

const Commercial: React.FC = () => {
	const [serviceCardData, setServiceCardData] = React.useState<ServicesCardData[]>([]);
	const [contentLoading, setContentLoading] = React.useState<boolean>(true);

	const serviceCardKeys = commercialPageData.servicesCardsData.map((service) => service.key);

	const { loading, error, data } = useQuery(GET_PRESIGNED_S3_URLS, {
		variables: { keys: serviceCardKeys },
	});

	React.useEffect(() => {
		if (error) {
			Sentry.captureException(error);
			return;
		}

		if (!data && !loading) {
			Sentry.captureException(new Error('No data in Commercial page'));
			return;
		}

		const serviceCardData: ServicesCardData[] = commercialPageData.servicesCardsData.map((service) => {
			const img = data?.getPresignedS3Objects?.find((obj: ImgObj) => obj.key === service.key);
			return { ...service, url: img?.url };
		});

		if (!serviceCardData) {
			Sentry.captureException(new Error('No service card images found in Commercial page'));
			return;
		}

		setServiceCardData(serviceCardData);
		setContentLoading(false);
	}, [data]);

	return (
		<Layout loading={contentLoading}>
			<div className='w-full h-full flex flex-col justify-center items-center'>
				<h1 className='text-center sm:text-left text-[48px] text-800'>Commercial Services</h1>
				<div className='w-screen flex flex-col  sm:flex-row justify-center items-start'>
					<div className='w-full sm:w-[55%] flex flex-col aspect-square sm:grid grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))] auto-rows-[300px] gap-8 m-0 sm:m-4 py-4 px-8'>
						{serviceCardData ? serviceCardData.map((service) => <ServicesCard key={service.name} name={service.name} description={service.description} img={service.url} />) : <></>}
					</div>
					<ScheduleServiceForm />
				</div>
				{process.env.NODE_ENV === 'production' ? (
					<></>
				) : (
					<Link
						to='/programs'
						className='maintenance-programs-link w-[80%] flex flex-col text-center bg-comp1 bg-opacity-55 text-white m-4 p-2 border h-[80%] border-black border-opacity-100 rounded-xl sm:hover:scale-105 sm:hover:shadow sm:hover:duration-500 '>
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
