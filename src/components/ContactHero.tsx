import React from 'react';

import '../styles/Contact.css';

import brand_transparent from '../images/odin_graceful_transparent.svg';

const contactInfo = {
	addressStreet: '908 Champion St.,',
	addressCity: 'Marquette, MI 49855',
	phone: '906-236-2760',
	email: 'info@southshoremechanical.services',
};

const ContactHero: React.FC = () => {
	return (
		<div className='contact-container'>
			<div className='contact-info'>
				<h2>Contact Us</h2>
				<p>{contactInfo.phone}</p>
				<p>{contactInfo.email}</p>
				<div className='contact-info-address-container'>
					<p>{contactInfo.addressStreet} </p>
					<p>{contactInfo.addressCity}</p>
				</div>
			</div>
			<a className='widget' href='https://www.thumbtack.com/mi/marquette/handyman/brahm-van-houzen/service/508465315204210696' target='_blank'>
				<img style={{ height: '192px', width: '192px' }} src='https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/pro-svg/orange/2024.svg' />
				<script src='https://www.thumbtack.com/profile/widgets/scripts/?service_pk=508465315204210696&widget_id=profile'></script>
			</a>
			<div className='vertical-line'/>
			<div className='contact-brand-container'>
				<img src={brand_transparent} alt='brand - dog stencil' />
				<div className='contact-brand-text'>
					<h1>South Shore</h1>
					<h1>Mechanical Services</h1>
					<p>This should be a few sentences about my mission and purpose and statement and stuff</p>
				</div>
			</div>
		</div>
	);
};

export default ContactHero;
