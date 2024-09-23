import * as Sentry from '@sentry/gatsby';
import * as React from 'react';
import { HeadFC } from 'gatsby';
import { useLazyQuery } from '@apollo/client';

// Component imports
import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';
import ScheduleServiceForm from '../../components/ScheduleServiceForm';
import SEO from '../../components/SEO';

// Type imports
import { ServicesCardData } from '../../types';
import { GET_PRESIGNED_S3_URLS } from '../../lib/graphql/queries';
import { ImgObj } from '../../lib/__generated__/graphql';

// Data imports
import residentialPageData from '../../lib/data/ResidentialPage.json';

const Residential: React.FC = () => {
	const [serviceCardData, setServiceCardData] = React.useState<ServicesCardData[]>([]);
	const [contentLoading, setContentLoading] = React.useState<boolean>(true);

	const serviceCardKeys = residentialPageData.servicesCardsData.map((service) => service.key);

	const [getPresignedUrls, { loading, error, data }] = useLazyQuery(GET_PRESIGNED_S3_URLS, {
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

		const serviceCardData: ServicesCardData[] = residentialPageData.servicesCardsData.map((service) => {
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

	React.useEffect(() => {
		getPresignedUrls();
	}, []);

	return (
		<Layout loading={contentLoading}>
			<div className='w-full h-full flex flex-col justify-center items-center'>
				<h1 className='text-center sm:test-left text-[48px] text-800'>Residential Services</h1>

				<div className='w-screen flex flex-col sm:flex-row  justify-center items-start'>
					<div className='w-full sm:w-[55%] flex flex-col aspect-square  sm:grid grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))] auto-rows-[300px] gap-8 m-0 sm:m-4 py-4 px-8'>
						{serviceCardData ? serviceCardData.map((service) => <ServicesCard key={service.name} name={service.name} description={service.description} img={service.url} />) : <></>}
					</div>
					<ScheduleServiceForm />
				</div>
			</div>
		</Layout>
	);
};

export default Residential;

export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='Residential Services' />;
