import React from 'react';

import '../styles/Contact.css';

import brand_image_transparent from '../images/svg/odin_graceful_transparent.svg';

import { PhoneIcon, ShopIcon, EnvelopeIcon, PinIcon, Icon } from 'evergreen-ui';
import { Link } from 'gatsby';
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

// SEO Info https://www.digitalocean.com/community/tutorials/how-to-boost-seo-using-gatsby-s-seo-component-and-gatsby-react-helmet

// Example of how to use Helmet to add structured data to your site
// for SEO https://v3.gatsbyjs.com/docs/how-to/adding-common-features/seo/

// <Helmet>
// 	<script type='application/ld+json'>
// 		{`
//         {
//           "@context": "https://schema.org",
//           "@type": "Organization",
//           "url": "https://www.spookytech.com",
//           "name": "Spooky technologies",
//           "contactPoint": {
//             "@type": "ContactPoint",
//             "telephone": "+5-601-785-8543",
//             "contactType": "Customer Support"
//           }
//         }
//       `}
// 	</script>
// </Helmet>;

const ContactHero: React.FC = () => {
	return (
		<div className='contact-container'>
			<div className='contact-info'>
				<h2>Contact Us</h2>
				<div className='contact-links'>
					<Link target='_blank' rel='noreferrer' to={`tel:${contactInfo.phone}`} className='contact-item'>
						<Icon style={{ marginTop: '1rem' }} icon={PhoneIcon} size={20} />
						<p>{contactInfo.phone}</p>
					</Link>
					<Link target='_blank' rel='noreferrer' to={`mailto:${contactInfo.email}`} className='contact-item'>
						<Icon style={{ marginTop: '1rem' }} icon={EnvelopeIcon} size={20} />
						<p>{contactInfo.email}</p>
					</Link>
					<Link target='_blank' rel='noreferrer' to={'https://maps.app.goo.gl/vsUYpBh3CToxdn3D7'} className='contact-item'>
						<Icon style={{ marginTop: '1rem' }} icon={ShopIcon} size={20} />
						<div className='contact-info-address-container'>
							<p>{contactInfo.addressStreet} </p>
							<p>{contactInfo.addressCity}</p>
						</div>
					</Link>
				</div>
			</div>

			<div className='vertical-line' />
			<div className='contact-brand-container'>
				<img alt='brand - dog stencil' src={brand_image_transparent} />
				<div className='contact-brand-text'>
					<h2>South Shore</h2>
					<h2>Mechanical Services</h2>
				</div>
			</div>
		</div>
	);
};

export default ContactHero;
