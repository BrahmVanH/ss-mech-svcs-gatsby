import * as Sentry from '@sentry/react';
import * as React from 'react';
import { HeadFC, Link } from 'gatsby';
import { useLazyQuery } from '@apollo/client';

// Component imports
import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';
import ScheduleServiceForm from '../../components/ScheduleServiceForm';
import SEO from '../../components/SEO';

// Query imports
import { GET_PRESIGNED_S3_URLS } from '../../lib/graphql/queries';

// Type imports
import { ImgObj } from '../../lib/__generated__/graphql';
import { ServicesCardData } from '../../types';

// Data imports
import commercialPageData from '../../lib/data/CommercialPage.json';
import { handleSetLoaderTimeout } from '../../lib/helpers';

const Commercial: React.FC = () => {
	const [serviceCardData, setServiceCardData] = React.useState<ServicesCardData[]>([]);
	const [heroImgUrl, setHeroImgUrl] = React.useState<string | null>(null);
	const [contentLoading, setContentLoading] = React.useState<boolean>(true);
	const [contentLoaded, setContentLoaded] = React.useState<boolean>(false);

	const serviceCardKeys = commercialPageData.servicesCardsData.map((service) => service.key);
	const heroImgJson = commercialPageData.heroImg;
	const heroKey = heroImgJson.key;
	const imgKeys = serviceCardKeys.concat(heroKey);

	const [getPresignedUrls, { loading, error, data }] = useLazyQuery(GET_PRESIGNED_S3_URLS, {
		variables: { keys: imgKeys },
	});

	React.useEffect(() => {
		if (error) {
			Sentry.captureException(error);
			return;
		}

		let serviceCardData: ServicesCardData[] = [];
		let heroImgData: ImgObj | undefined;

		if (!data && !loading) {
			serviceCardData = commercialPageData.servicesCardsData.map((service) => ({ name: service.name, description: service.description }));
			setServiceCardData(serviceCardData);
			setContentLoading(false);
			Sentry.captureException(new Error('No data in Commercial page'));
			return;
		}

		serviceCardData = commercialPageData.servicesCardsData.map((service) => {
			const img = data?.getPresignedS3Objects?.find((obj: ImgObj) => obj.key === service.key);
			return { ...service, url: img?.url };
		});

		heroImgData = data?.getPresignedS3Objects?.find((obj: ImgObj) => obj.key === heroKey);

		if (!serviceCardData || !heroImgData?.url) {
			Sentry.captureException(new Error('No service card images or hero image found in Commercial page'));
			return;
		}

		setServiceCardData(serviceCardData);
		setHeroImgUrl(heroImgData.url);
		setContentLoading(false);

		setContentLoading(false);
	}, [data]);

	React.useEffect(() => {
		getPresignedUrls();
	}, []);

	React.useEffect(() => {
		if (!data && !loading && !error && !contentLoaded && contentLoading) {
			handleSetLoaderTimeout(setContentLoading);
		}
	}, [data, loading, error, contentLoaded, contentLoading]);

	return (
		<Layout loading={contentLoading}>
			<div className='w-full h-full flex flex-col justify-center items-center'>
				<div className='bg-opacity-85 w-full] h-[50%] rounded-2xl text-white'>
					<img src={heroImgUrl ?? ''} alt={heroImgJson.alt} className=' z-[500] object-cover ' />
					<div className='bg-primary bg-opacity-50 p-4   z-[800] absolute w-full top-[10%] md:top-[20%]  xl:top-[40%]   '>
						<h1 className='text-left sm:text-left md:text-6xl xl:text-8xl text-800 m-2 font-black'>Commercial Services</h1>
						<p className='hidden sm:block text-2xl md:text-3xl mx-2 my-4 w-[65%]'>We offer an array of Commercial maintenance and repair services, as well as tailored maintenance programs.</p>
					</div>
				</div>
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
