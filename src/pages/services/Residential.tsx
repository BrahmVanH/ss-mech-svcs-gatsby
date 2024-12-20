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
// import { handleSetLoaderTimeout } from '../../lib/helpers';

const Residential: React.FC = () => {
	const [serviceCardData, setServiceCardData] = React.useState<ServicesCardData[]>([]);
	const [heroImgUrl, setHeroImgUrl] = React.useState<string | null>(null);
	const [contentLoading, setContentLoading] = React.useState<boolean>(true);
	const [contentLoaded, setContentLoaded] = React.useState<boolean>(false);

	const serviceCardKeys = residentialPageData.servicesCardsData.map((service) => service.key);
	const heroImgJson = residentialPageData.heroImg;
	const heroKey = heroImgJson.key;
	const imgKeys = serviceCardKeys.concat(heroKey);

	const [getPresignedUrls] = useLazyQuery(GET_PRESIGNED_S3_URLS, {
		variables: { keys: imgKeys },
	});

	const handleGetPresignedUrls = React.useCallback(async (servicesCardsData: ServicesCardData[], heroImgKey: string) => {
		try {
			const { data, loading, error } = await getPresignedUrls();
			if (error) {
				throw new Error('Error fetching presigned urls in Residential page', error);
			}

			let serviceCardData: ServicesCardData[] = [];
			let heroImgData: ImgObj | undefined;

			if (!data && !loading) {
				serviceCardData = servicesCardsData.map((service) => ({ name: service.name, description: service.description }));
				setServiceCardData(serviceCardData);
				setContentLoading(false);
				throw new Error('No data in Residential page');
			}

			serviceCardData = residentialPageData.servicesCardsData.map((service) => {
				const img = data?.getPresignedS3Objects?.find((obj: ImgObj) => obj.key === service.key);
				return { ...service, url: img?.url };
			});

			heroImgData = data?.getPresignedS3Objects?.find((obj: ImgObj) => obj.key === heroImgKey);

			if (!serviceCardData || !heroImgData?.url) {
				throw new Error('No service card images or hero image found in Residential page');
			}

			setServiceCardData(serviceCardData);
			setHeroImgUrl(heroImgData?.url);
			setContentLoading(false);

			setContentLoading(false);
		} catch (error) {
			Sentry.captureException(error);
		}
	}, []);

	React.useEffect(() => {
		if (!residentialPageData) {
			return;
		}
		handleGetPresignedUrls(residentialPageData.servicesCardsData, heroKey);
	}, [residentialPageData.servicesCardsData, heroKey]);

	return (
		<Layout loading={contentLoading}>
			<div className='w-full h-full flex flex-col justify-center items-center'>
				<div className='opacity-85 w-full h-[50%] rounded-2xl text-white'>
					<img src={heroImgUrl ?? ''} alt={heroImgJson.alt} className=' z-[500] w-full object-cover ' />
					<div className='bg-primary opacity-85 p-4  z-[800] absolute w-full  top-[10%] md:top-[20%]  xl:top-[40%]   '>
						<h1 className='text-left sm:text-left md:text-6xl xl:text-8xl font-black m-2'>Residential Services</h1>
						<p className='hidden sm:block text-2xl md:text-3xl mx-2 my-4 w-[65%]'>We handle appliance services and home repairs of all sizes.</p>
					</div>
				</div>
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
