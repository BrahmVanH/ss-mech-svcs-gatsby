import React from 'react';

import '../styles/Contact.css';

import brand_transparent from '../images/odin_graceful_transparent.svg';
import { PhoneIcon, ShopIcon, EnvelopeIcon, PinIcon, Icon } from 'evergreen-ui';
const contactInfo = {
	addressStreet: '908 Champion St.,',
	addressCity: 'Marquette, MI 49855',
	phone: '906-236-2760',
	email: 'info@southshoremechanical.services',
};

// <a className='thumbtack-badge' href='https://www.thumbtack.com/mi/marquette/handyman/brahm-van-houzen/service/508465315204210696' target='_blank'>
// 	<img style={{ height: '144px', width: '144px' }} src='https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/pro-svg/orange/2024.svg' />
// 	<script src='https://www.thumbtack.com/profile/widgets/scripts/?service_pk=508465315204210696&widget_id=profile'></script>
// </a>;

const ContactHero: React.FC = () => {
	return (
		<div className='contact-container'>
			<div className='contact-info'>
				<h2>Contact Us</h2>
				<div className='contact-item'>
					<Icon style={{ marginTop: '1rem' }} icon={PhoneIcon} size={20} />
					<p>{contactInfo.phone}</p>
				</div>
				<div className='contact-item'>
					<Icon style={{ marginTop: '1rem' }} icon={EnvelopeIcon} size={20} />
					<p>{contactInfo.email}</p>
				</div>
				<div className='contact-item'>
					<Icon style={{ marginTop: '1rem' }} icon={ShopIcon} size={20} />
					<div className='contact-info-address-container'>
						<p>{contactInfo.addressStreet} </p>
						<p>{contactInfo.addressCity}</p>
					</div>
				</div>
			</div>

			<div className='vertical-line' />
			<div className='contact-brand-container'>
				<img src={brand_transparent} alt='brand - dog stencil' />
				<div className='contact-brand-text'>
					<h2>South Shore</h2>
					<h2>Mechanical Services</h2>
				</div>
			</div>
		</div>
	);
};

export default ContactHero;
