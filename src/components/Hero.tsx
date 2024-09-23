import * as React from 'react';
import * as Sentry from '@sentry/react';

import ImageGallery from './ImageGallery';

import map_up_mqt_county from '../images/map_upper_peninsula_mqt_county_teal.png';
import odin_graceful_white_fill from '../images/svg/odin_graceful_bg-transparent_white-fill.svg';

import heroData from '../lib/data/Hero.json';

import { IImage } from '../types';
import { useLazyQuery } from '@apollo/client';
import { GET_PRESIGNED_S3_URLS } from '../lib/graphql/queries';

export interface HeroProps {
	imgData?: {
		slideshowImages: IImage[];
		mobileBackgroundImage: IImage;
	};
}
const Hero: React.FC<HeroProps> = (heroProps) => {
	const [slideshowImgs, setSlideshowImgs] = React.useState<IImage[] | null>(null);
	const [mobileBackgroundImg, setMobileBackgroundImg] = React.useState<IImage | null>(null);
	const [pageLoading, setPageLoading] = React.useState<boolean>(true);

	const [getPresignedUrls, { loading, error, data }] = useLazyQuery(GET_PRESIGNED_S3_URLS, {
		variables: { keys: (heroData.slideshowImages.map((image) => image.key) ?? '').concat(heroData.mobileBackgroundImage.key ?? '') },
	});

	React.useEffect(() => {
		if (error) {
			Sentry.captureException(error);
			return;
		}

		if (!data && !loading) {
			setPageLoading(false);
			Sentry.captureException(new Error('No data in Hero'));
			return;
		}


		const images = heroData.slideshowImages.map((image) => {
			const img = data?.getPresignedS3Objects?.find((node: any) => node.key === image.key);
			return { ...image, url: img?.url ?? '' };
		});

		setSlideshowImgs(images);

		const mobileBackgroundImgS3Node = data?.getPresignedS3Urls?.find((node: any) => node.key === heroData.mobileBackgroundImage.key);

		setMobileBackgroundImg({ ...heroData.mobileBackgroundImage, url: mobileBackgroundImgS3Node?.url ?? '' });

		setPageLoading(false);
	}, [data]);

	React.useEffect(() => {
		if (heroData.slideshowImages.length > 0 && heroData.mobileBackgroundImage.key) {
			getPresignedUrls();
		}

		setPageLoading(false);
	}, [heroData.slideshowImages, heroData.mobileBackgroundImage.key]);

	return (
		<>
			{!pageLoading ? (
				<div className='h-screen w-screen '>
					<div className=' bg-transparent block overflow-hidden z-[900] w-screen  h-screen justify-center items-center flex-col text-center absolute top-0 sm:overflow-visible sm:bg-home-hero-fill sm:w-full sm:flex sm:h-full'>
						{mobileBackgroundImg?.url ? (
							<div
								style={{ backgroundImage: `url(${mobileBackgroundImg?.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
								className='flex text-white col-start-1 col-end-2 row-start-2 row-end-3 flex-col content-start justify-center text-start z-[1000] w-full h-full absolute top-0 left-0 sm:hidden'>
								<div className='flex '>
									<h1 className=' self-end w-min m-0 sm:m-auto p-0 text-[80px] leading-[72px]'>South Shore </h1>
									<img className='w-[20%] max-w-[100px] max-h-[200px] ml-4 ' src={odin_graceful_white_fill} alt='brand - dog stencil' />
								</div>

								<h1 className=' self-start  w-min m-0  p-0 text-[80px] leading-[72px]'>Mechanical Services</h1>
								<div className='horizontal-line mt-8 bg-white w-[70%] h-px' />
								<p className='my-4 mx-0 text-5xl text-wrap leading-[72px]'>Commercial & Residential </p>
								<p className='text-[28px] leading-[28px] font-bold'>Plumbing | Electrical | Appliance</p>
							</div>
						) : (
							<div className='flex text-black col-start-1 col-end-2 row-start-2 row-end-3 flex-col content-start justify-center text-start z-[1000] w-full h-full absolute top-0 left-0 sm:hidden'>
								<div className='flex '>
									<h1 className=' self-end w-min m-0 sm:m-auto p-0 text-[80px] leading-[72px]'>South Shore </h1>
									<img className='w-[20%] max-w-[100px] max-h-[200px] ml-4 ' src={odin_graceful_white_fill} alt='brand - dog stencil' />
								</div>

								<h1 className=' self-start  w-min m-0  p-0 text-[80px] leading-[72px]'>Mechanical Services</h1>
								<div className='horizontal-line mt-8 bg-black w-[70%] h-px' />
								<p className='my-4 mx-0 text-5xl text-wrap leading-[72px]'>Commercial & Residential </p>
								<p className='text-[28px] leading-[28px] font-bold'>Plumbing | Electrical | Appliance</p>
							</div>
						)}

						<div className='hidden p-4 w-full sm:flex justify-center items-center flex-col'>
							<img className='w-[40%]' src={map_up_mqt_county} alt='stencil of county map of upper peninsula of michigan with marquette county shaded in' />
							<p className='text-white mb-8 text-4xl max-w-[75%]'>Providing Commercial and Residential Mechanical services to Marquette, Michigan</p>
						</div>
					</div>

					{slideshowImgs ? <ImageGallery images={slideshowImgs} /> : <></>}
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Hero;
