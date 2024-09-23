import * as Sentry from '@sentry/react';
import * as React from 'react';

import { useQuery } from '@apollo/client';

import Layout from '../components/layout';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import Hero from '../components/Hero';
import { ServicesProps } from '../components/Services';
import SEO from '../components/SEO';

import { matchs3UrlsAndImgKeys } from '../lib/helpers';

import { GET_PRESIGNED_S3_URLS } from '../lib/graphql/queries';

import { HeadFC } from 'gatsby';

import homePageData from '../lib/data/HomePage.json';

import { IImage } from '../types';

const Home: React.FC = () => {
	const homeRef = React.useRef<HTMLDivElement>(null);
	const [serviceCardImgs, setServiceCardImgs] = React.useState<ServicesProps['imgObjs'] | null>(null);
	const [contentLoading, setContentLoading] = React.useState<boolean>(true);

	const servicesCardImgs: IImage[] = [homePageData?.servicesCardImageData?.commercial, homePageData?.servicesCardImageData?.residential];
	const { loading, error, data } = useQuery(GET_PRESIGNED_S3_URLS, {
		variables: { keys: servicesCardImgs.map((i) => i.key) },
	});

	React.useEffect(() => {
		if (error) {
			Sentry.captureException(error);
			return;
		}

		if (!data && !loading) {
			Sentry.captureException(new Error('No data in Home page'));
			return;
		}

		const serviceCardImgs = matchs3UrlsAndImgKeys(servicesCardImgs, data?.getPresignedS3Objects);

		if (!serviceCardImgs) {
			Sentry.captureException(new Error('No service card images found in Home page'));
			return;
		}

		const imgObjs = {
			commercial: serviceCardImgs[0],
			residential: serviceCardImgs[1],
		};

		setServiceCardImgs(imgObjs);
		setContentLoading(false);
	}, [data, error]);

	return (
		<Layout loading={contentLoading}>
			<Hero imgData={homePageData.heroData} />
			<div ref={homeRef} className='flex flex-col items-center justify-center bg-transparent'>
				{!loading && serviceCardImgs ? <Services imgObjs={serviceCardImgs} /> : <></>}
				<Reviews />
			</div>
		</Layout>
	);
};

export default Home;

export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='South Shore Mechanical Services' />;
