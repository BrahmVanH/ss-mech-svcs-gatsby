import * as Sentry from '@sentry/react';
import * as React from 'react';

import { HeadFC, PageProps, graphql } from 'gatsby';
import { useLazyQuery } from '@apollo/client';

import { GET_PRESIGNED_S3_URLS } from '../lib/graphql/queries';

import Layout from '../components/layout';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
// import SEO from '../components/SEO';
import Hero, { HeroProps } from '../components/Hero';

import homePageData from '../lib/data/HomePage.json';

import { IImage } from '../types';

// import 'normalize.css';

// interface HomePageProps extends PageProps {
// 	data: {
// 		images: {
// 			edges: {
// 				node: {
// 					Key: string;
// 					url: string;
// 				};
// 			}[];
// 		};
// 	};
// }

interface ImgKeys {
	commercial: IImage;
	residential: IImage;
}

const Home: React.FC = () => {
	const homeRef = React.useRef<HTMLDivElement>(null);
	const [serviceCardImgs, setServiceCardImgs] = React.useState<ImgKeys | null>(null);
	const [heroImgs, setHeroImgs] = React.useState<HeroProps | null>(null);

	// Pass in an array of image keys to get presigned S3 URLs from Express server
	const [getS3Objects, { data }] = useLazyQuery(GET_PRESIGNED_S3_URLS);

	// const findImgs = React.useCallback(({ pageImgData, s3Urls }: { pageImgData: IImage[]; s3Urls: IImage[] }) => {
	// 	console.log('s3Urls: ', s3Urls);
	// 	if (!s3Urls || pageImgData.length === 0) {
	// 		// Sentry.captureException(new Error('No image urls provided for findImgs'));
	// 		return;
	// 	}
	// 	// Look through pageImgData
	// 	return pageImgData.map((image: IImage, i: number) => {
	// 		const img = s3Urls.find((obj: IImage) => obj.key === image.key);
	// 		if (!img) {
	// 			Sentry.captureException(new Error('No image keys found in s3Urls in findImgs'));
	// 			return;
	// 		}

	// 		return {
	// 			...image,
	// 			alt: image.alt,
	// 			url: img.url,
	// 		};
	// 	});
	// }, []);

	// React.useEffect(() => {
	// 	if (!data) {
	// 		Sentry.captureException(new Error('No data in Home page'));
	// 		return;
	// 	}

	// 	const images = data.images.edges;
	// 	const imgKeys = homePageData.servicesCardImageData.map((card, i) => {
	// 		return {
	// 			alt: card.alt,
	// 			img: images[i].node.url,
	// 		};
	// 	});

	// 	setServiceCardImgs({
	// 		commercial: imgKeys[0],
	// 		residential: imgKeys[1],
	// 	});
	// }, [data]);

	// React.useEffect(() => {
	// 	if (homePageData) {
	// 		Sentry.captureException(new Error('No data in Home page. This is a big issue because all JSON dependencies are are processed at build time...'));
	// 	}

	// 	// const servicesCardImgs = homePageData.servicesCardImageData.map((card, i) => {
	// 	// 	return {
	// 	// 		alt: card.alt,
	// 	// 		key: card.key,
	// 	// 	};
	// 	// });

	// 	const heroImgs = {
	// 		slideshowImages: homePageData.heroData.slideshowImages.map((image, i) => {
	// 			return {
	// 				alt: image.alt,
	// 				key: image.key,
	// 			};
	// 		}),
	// 		mobileBackgroundImage: homePageData.heroData.mobileBackgroundImage,
	// 	};

	// 	if (!heroImgs) {
	// 		Sentry.captureException(new Error('Missing intermediary data in Home page - heroImgs could not be deduced from JSON.'));
	// 		return;
	// 	}

	// 	const imgKeys = heroImgs.slideshowImages
	// 		.concat(heroImgs.mobileBackgroundImage, homePageData.servicesCardImageData.commercial, homePageData.servicesCardImageData.residential)
	// 		.map((img: IImage) => img.key);

	// 	const pageImages = getS3Objects({ variables: { imgKeys } });

	// 	if (!pageImages) {
	// 		Sentry.captureException(new Error('No image urls returned from query'));
	// 	}

	// 	console.log(pageImages);
	// }, [homePageData]);

	return (
		<Layout>
			<Hero imgData={homePageData.heroData} />
			<div ref={homeRef} className='flex flex-col items-center justify-center bg-transparent'>
				{/* {serviceCardImgs ? <Services imgKeys={serviceCardImgs} /> : <></>} */}
				<Reviews />
			</div>
		</Layout>
	);
};

export default Home;

// export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='South Shore Mechanical Services' />;
