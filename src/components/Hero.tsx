import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ac_compressor_jpeg from '../images/ac_compressor.jpeg';
import data_cable_wiring_jpeg from '../images/data-cable-wiring.jpeg';
import dryer_repair_jpeg from '../images/dryer-repair.jpeg';
import furnace_repair_jpeg from '../images/furnace-repair.jpeg';
import map_up_mqt_county from '../images/map_upper_peninsula_mqt_county_teal.png';

import odin_graceful_white_fill from '../images/svg/odin_graceful_bg-transparent_white-fill.svg';

const Hero: React.FC = () => {
	const images = [
		{ alt: 'gloved hand soldering an ac compressor', img: ac_compressor_jpeg },
		{ alt: 'gloved hands wiring ethernet cable terminal in wall', img: data_cable_wiring_jpeg },
		{ alt: 'person repairing dryer', img: dryer_repair_jpeg },
		{ alt: 'person repairing a furnace', img: furnace_repair_jpeg },
	];

	return (
		<div className='h-screen w-screen  '>
			<div className=' bg-transparent block overflow-hidden z-[900] w-screen  h-screen justify-center items-center flex-col text-center absolute top-0 sm:overflow-visible sm:bg-home-hero-fill sm:w-full sm:flex sm:h-full'>
				<div className='hero-text-mobile flex bg-home-hero-img-mobile text-white col-start-1 col-end-2 row-start-2 row-end-3 flex-col content-start justify-center text-start z-[1000] w-full h-full absolute top-0 left-0 sm:hidden'>
					<div className='mobile-hero-brand-top flex '>
						<h1 className=' self-end w-min m-0 sm:m-auto p-0 text-[80px] leading-[72px]'>South Shore </h1>
						<img className='w-[20%] max-w-[100px] max-h-[200px] ml-4 ' src={odin_graceful_white_fill} alt='brand - dog stencil' />
					</div>
					<h1 className=' self-start  w-min m-0  p-0 text-[80px] leading-[72px]'>Mechanical Services</h1>
					<div className='horizontal-line mt-8 bg-white w-[70%] h-px' />
					<p className='my-4 mx-0 text-5xl text-wrap leading-[72px]'>Commercial & Residential </p>
					<p className='hero-text-mobile-plumbing-electrical-appliance text-[28px] leading-[28px] font-bold'>Plumbing | Electrical | Appliance</p>
				</div>

				<div className='hero-text hidden p-4 w-full sm:flex justify-center items-center flex-col'>
					<img className='w-[40%]' src={map_up_mqt_county} alt='stencil of county map of upper peninsula of michigan with marquette county shaded in' />
					<p className='text-white mb-8 text-4xl max-w-[75%]'>Providing Commercial and Residential Mechanical services to Marquette, Michigan</p>
				</div>
			</div>
			<Swiper
				// height={500}
				className='hidden hero-swiper sm:block'
				width={1500}
				spaceBetween={0}
				centeredSlides={true}
				autoplay={{
					delay: 8000,
					disableOnInteraction: false,
				}}
				loop={true}
				modules={[Autoplay, Pagination, Navigation]}>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img className='slide-image w-screen max-h-screen overflow-hidden' src={image.img} alt={image.alt} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Hero;
