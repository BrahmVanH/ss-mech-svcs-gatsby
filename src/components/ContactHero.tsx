import * as React from 'react';

import brand_image_transparent from '../images/svg/odin_graceful_transparent.svg';

import { PhoneIcon, EnvelopeIcon, MapIcon, Icon } from 'evergreen-ui';
export const contactInfo = {
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
		<div className='contact-container .hidden sm:flex flex-row justify-evenly items-center text-left w-full bg-black bg-opacity-15'>
			<div className='contact-info p-4 flex flex-col justify-center items-start leading-6'>
				<h2 className='mb-4'>Contact Us</h2>
				<div className='contact-links flex flex-col justify-center items-start'>
					<a target='_blank' rel='noreferrer' href={`tel:${contactInfo.phone}`} className='contact-item flex flex-row justify-center items-center'>
						{/* <Icon className='mt-4 fill-primary' icon={PhoneIcon} size={20} /> */}
						<PhoneIcon className='mt-4 fill-primary' size={20} />
						<p className='mt-4 ml-4'>{contactInfo.phone}</p>
					</a>
					<a target='_blank' rel='noreferrer' href={`mailto:${contactInfo.email}`} className='contact-item flex flex-row justify-center items-center'>
						{/* <Icon className='mt-4 fill-primary' icon={EnvelopeIcon} size={20} /> */}
						<EnvelopeIcon className='mt-4 fill-primary' size={20} />
						<p className='mt-4 ml-4'>{contactInfo.email}</p>
					</a>
					<a target='_blank' rel='noreferrer' href={'https://maps.app.goo.gl/vsUYpBh3CToxdn3D7'} className='contact-item flex flex-row justify-center items-center'>
						{/* <Icon className='mt-4 fill-primary' icon={MapIcon} size={20} /> */}
						<MapIcon className='mt-4 fill-primary' size={20} />
						<div className='contact-info-address-container mt-4 ml-4'>
							<p className='m-0'>{contactInfo.addressStreet} </p>
							<p className='m-0'>{contactInfo.addressCity}</p>
						</div>
					</a>
				</div>
			</div>

			<div className='vertical-line hidden sm:block py-[7%] w-px h-[90%] bg-black m-8 self-center justify-self-center' />
			<div className='contact-brand-container hidden sm:flex justify-center items-center mr-4'>
				<img className='max-h-32 mr-2' alt='brand - dog stencil' src={brand_image_transparent} />
				<div className='contact-brand-text p-4 w-min'>
					<h2 className='leading-8 w-min text-nowrap'>South Shore</h2>
					<h2 className='leading-8 w-min text-nowrap'>Mechanical Services</h2>
				</div>
			</div>
		</div>
	);
};

export default ContactHero;
