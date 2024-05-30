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
import ac_compressor_jpeg from '../images/ac-compressor.jpeg';
import data_cable_wiring_jpeg from '../images/data-cable-wiring.jpeg';
import dryer_repair_jpeg from '../images/dryer-repair.jpeg';
import furnace_repair_jpeg from '../images/furnace-repair.jpeg';
import React from 'react';

const Hero: React.FC = () => {
	const images = [ac_compressor_jpeg, data_cable_wiring_jpeg, dryer_repair_jpeg, furnace_repair_jpeg];

	const slideImageStyle = (image: string) => {
		return {
			width: '100vw',
			height: '100vh',
			backgroundImage: `url(${image})`,
			backgroundPosition: 'bottom',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
		};
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
					<h2>South Shore Mechanical Services</h2>
					<p>Providing mechanical solutions for your business</p>
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
						{/* <div style={slideImageStyle(image)} /> */}
						<Img style={slideImageStyle(image)}  />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Hero;
