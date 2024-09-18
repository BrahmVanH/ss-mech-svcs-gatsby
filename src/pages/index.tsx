import * as Sentry from '@sentry/react';
import * as React from 'react';

import { useQuery } from '@apollo/client';

import { GET_PRESIGNED_S3_URLS } from '../lib/graphql/queries';

import Layout from '../components/layout';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import Hero, { HeroProps } from '../components/Hero';
import { ServicesProps } from '../components/Services';

import { matchs3UrlsAndImgKeys } from '../lib/helpers';

import { ImgObj } from '../lib/__generated__/graphql';

import homePageData from '../lib/data/HomePage.json';

import { IImage } from '../types';

const Home: React.FC = () => {
	const homeRef = React.useRef<HTMLDivElement>(null);
	const [serviceCardImgs, setServiceCardImgs] = React.useState<ServicesProps['imgObjs'] | null>(null);
	const [heroImgs, setHeroImgs] = React.useState<HeroProps | null>(null);

	const servicesCardImgs: IImage[] = [homePageData?.servicesCardImageData?.commercial, homePageData?.servicesCardImageData?.residential];
	const { loading, error, data } = useQuery(GET_PRESIGNED_S3_URLS, {
		variables: { keys: servicesCardImgs.map((i) => i.key) },
	});

	const formatImgData = React.useCallback((pageImgData: ImgObj[], s3Urls: ImgObj[]) => {
		if (!s3Urls || pageImgData.length === 0) {
			Sentry.captureException(new Error('No image urls provided for findImgs'));
			return;
		}

		const imgArr: ImgObj[] = pageImgData.map((image: any, i: number) => {
			const img: ImgObj | undefined = s3Urls.find((obj: any) => obj.key === image.key);
			if (!img?.key) {
				Sentry.captureException(new Error('No image keys found in s3Urls in findImgs'));
				return;
			}
			if (!img.url) {
				Sentry.captureException(new Error('No image urls found in s3Urls in findImgs'));
				return;
			}

			if (!image.alt) {
				Sentry.captureException(new Error('No alt text found in image in findImgs'));
				return;
			}
			console.log('img: ', img);
			console.log('image: ', image);
			return {
				...image,
				alt: image.alt ?? '',
				url: img.url ?? '',
			};
		});

		return {
			commercial: imgArr[0],
			residential: imgArr[1],
		} as ServicesProps['imgObjs'];
	}, []);

	React.useEffect(() => {
		if (!data) {
			Sentry.captureException(new Error('No data in Home page'));
			return;
		}

		if (error) {
			Sentry.captureException(error);
			return;
		}

		const serviceCardImgs = matchs3UrlsAndImgKeys(servicesCardImgs, data.getPresignedS3Objects);

		if (!serviceCardImgs) {
			Sentry.captureException(new Error('No service card images found in Home page'));
			return;
		}

		const imgObjs = {
			commercial: serviceCardImgs[0],
			residential: serviceCardImgs[1],
		};

		setServiceCardImgs(imgObjs);
	}, [data, error]);

	return (
		<Layout>
			<Hero imgData={homePageData.heroData} />
			<div ref={homeRef} className='flex flex-col items-center justify-center bg-transparent'>
				{!loading && serviceCardImgs ? <Services imgObjs={serviceCardImgs} /> : <></>}
				<Reviews />
			</div>
		</Layout>
	);
};

export default Home;

// export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='South Shore Mechanical Services' />;
