import * as React from 'react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';

import ImageGallery from './ImageGallery';

import map_up_mqt_county from '../images/map_upper_peninsula_mqt_county_teal.png';
import odin_graceful_white_fill from '../images/svg/odin_graceful_bg-transparent_white-fill.svg';

import heroData from '../lib/data/Hero.json';

import { IImage } from '../types';

const Hero: React.FC = () => {
	const [slideshowImgs, setSlideshowImgs] = React.useState<IImage[] | null>(null);
	const [mobileBackgroundImg, setMobileBackgroundImg] = React.useState<IImage | null>(null);

	const data = useStaticQuery(graphql`
		query {
			allS3Object(filter: { Key: { in: ["ac_compressor", "data-cable-wiring", "dryer-repair", "air-filter-replacement", "multi-meter-testing-iphone-res"] } }) {
				edges {
					node {
						Key
						url
					}
				}
			}
		}
	`);

	React.useEffect(() => {
		const images = heroData.slideshowImages.map((image) => {
			const img = data.allS3Object.edges.find((node: any) => node.node.Key === image.key);
			return { ...image, url: img?.node.url ?? '' };
		});

		setSlideshowImgs(images);

		const mobileBackgroundImgS3Node = data.allS3Object.edges.find((node: any) => node.node.Key === heroData.mobileBackgroundImage.key);

		setMobileBackgroundImg({ ...heroData.mobileBackgroundImage, url: mobileBackgroundImgS3Node?.node.url ?? '' });
	}, [data]);

	return (
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
	);
};

export default Hero;
