import React from 'react';
import ContactHero from './ContactHero';
import { Link } from 'gatsby';

import { PhoneIcon, EnvelopeIcon, MapIcon, Icon } from 'evergreen-ui';

import '../styles/Footer.css';

const Footer: React.FC = () => {
	const contactInfo = {
		addressStreet: '908 Champion St.,',
		addressCity: 'Marquette, MI 49855',
		phone: '906-236-2760',
		email: 'info@southshoremechanical.services',
	};

	return (
		<footer>
			<ContactHero />
			<div className='footer-strip'>
				<p className='copy-right'>© 2024, South Shore Technical Services, LLC</p>
				<div className='footer-strip-links'>
					<Link target='_blank' rel='noreferrer' to={`tel:${contactInfo.phone}`} className='contact-item'>
						<Icon style={{ marginTop: '1rem' }} icon={PhoneIcon} size={16} />
					</Link>
					<Link target='_blank' rel='noreferrer' to={`mailto:${contactInfo.email}`} className='contact-item'>
						<Icon style={{ marginTop: '1rem' }} icon={EnvelopeIcon} size={16} />
					</Link>
					<Link target='_blank' rel='noreferrer' to={'https://maps.app.goo.gl/vsUYpBh3CToxdn3D7'} className='contact-item'>
						<Icon style={{ marginTop: '1rem' }} icon={MapIcon} size={16} />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
