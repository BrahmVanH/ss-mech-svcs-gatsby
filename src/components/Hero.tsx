import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Img from 'gatsby-image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/Hero.css';

//  Import images for slideshow
import ac_compressor_jpeg from '../images/ac_compressor.jpeg';
import data_cable_wiring_jpeg from '../images/data-cable-wiring.jpeg';
import dryer_repair_jpeg from '../images/dryer-repair.jpeg';
import furnace_repair_jpeg from '../images/furnace-repair.jpeg';
import map_up_mqt_county from '../images/map_upper_peninsula_mqt_county_teal.png';

const Hero: React.FC = () => {
	const images = [
		{ alt: 'soldering an ac compressor', img: ac_compressor_jpeg },
		{ alt: 'wiring ethernet cable terminal', img: data_cable_wiring_jpeg },
		{ alt: 'person repairing dryer', img: dryer_repair_jpeg },
		{ alt: 'repairing a furnace', img: furnace_repair_jpeg },
	];

	const slideImageStyle = {
		width: '100vw !important',
		// height: '100vh',
	};

	return (
		// <div className='hero'>
		// 	<div className='hero-text'>
		// 		<h1>South Shore Mechanical Services</h1>
		// 		<p>Providing mechanical solutions for your business</p>
		// 	</div>
		// </div>
		<div className='hero-wrapper'>
			<div className='hero'>
				<div className='hero-text'>
					<img src={map_up_mqt_county} alt='stencil of county map of upper peninsula of michigan with marquette county shaded in' />
					<p>Providing commercial and residential handyman services to the Upper Peninsula of Michigan</p>
				</div>
			</div>
			<Swiper
				height={500}
				width={1000}
				spaceBetween={300}
				centeredSlides={true}
				autoplay={{
					delay: 10000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img className='slide-image' src={image.img} alt={image.alt} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Hero;
