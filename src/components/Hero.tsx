import React from 'react';
// Import Swiper React components
import { Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Img from 'gatsby-image';
import { ArrowDownIcon, CircleArrowDownIcon } from 'evergreen-ui';

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
import multimeter_test_mobile from '../images/multi-meter-testing-iphone-res.jpg';
import odin_graceful_white_fill from '../images/svg/odin_graceful_bg-transparent_white-fill.svg';

const Hero: React.FC = () => {
	const [renderMobileView, setRenderMobileView] = React.useState<boolean>(false);
	const images = [
		{ alt: 'soldering an ac compressor', img: ac_compressor_jpeg },
		{ alt: 'wiring ethernet cable terminal', img: data_cable_wiring_jpeg },
		{ alt: 'person repairing dryer', img: dryer_repair_jpeg },
		{ alt: 'repairing a furnace', img: furnace_repair_jpeg },
	];

	const mobileHeroImage = {
		alt: 'wires in an electrical panel',
		img: multimeter_test_mobile,
	};

	const slideImageStyle = {
		width: '100vw !important',
		// height: '100vh',
	};

	return (
		<div className='hero-wrapper'>
			<div className='hero'>
				<img className='hero-img-mobile' src={mobileHeroImage.img} alt={mobileHeroImage.alt} />
				<div className='hero-text-mobile'>
					<div className='mobile-hero-brand-top'>
						<h1>South Shore </h1>
						<img src={odin_graceful_white_fill} />
					</div>
					<h1>Mechanical Services</h1>
					<div className='horizontal-line' />
					<p>Commercial & Residential Maintenance </p>
					{/* <button onClick={() => handleScrollServicesIntoView} className='arrow-icon-btn'>
						<ArrowDownIcon color={'#fff'} size={48} />
					</button> */}
				</div>
				<div className='hero-text'>
					<img src={map_up_mqt_county} alt='stencil of county map of upper peninsula of michigan with marquette county shaded in' />
					<p>Providing commercial and residential mechanical services to the Upper Peninsula of Michigan</p>
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
				className='mySwiper hero-swiper'>
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
