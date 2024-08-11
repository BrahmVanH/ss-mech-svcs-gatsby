import * as React from 'react';

import brand_image_transparent from '../images/svg/odin_graceful_transparent.svg';

import { PhoneIcon, EnvelopeIcon, MapIcon, Icon } from 'evergreen-ui';

import contactHeroData from '../lib/data/ContactHero.json';

// <a className='thumbtack-badge' href='https://www.thumbtack.com/mi/marquette/handyman/brahm-van-houzen/service/508465315204210696' target='_blank'>
// 	<img style={{ height: '144px', width: '144px' }} src='https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/pro-svg/orange/2024.svg' />
// 	<script src='https://www.thumbtack.com/profile/widgets/scripts/?service_pk=508465315204210696&widget_id=profile'></script>
// </a>;

const ContactHero: React.FC = () => {
	return (
		<div className='.hidden sm:flex flex-row justify-evenly items-center text-left w-full bg-black bg-opacity-15'>
			<div className='p-4 flex flex-col justify-center items-start leading-6'>
				<h2 className='mb-4'>Contact Us</h2>
				<div className='flex flex-col justify-center items-start'>
					<a target='_blank' rel='noreferrer' href={`tel:${contactHeroData.contactInfo.phone}`} className='contact-item flex flex-row justify-center items-center'>
						<PhoneIcon className='mt-4 fill-primary' size={20} />
						<p className='mt-4 ml-4'>{contactHeroData.contactInfo.phone}</p>
					</a>
					<a target='_blank' rel='noreferrer' href={`mailto:${contactHeroData.contactInfo.email}`} className='contact-item flex flex-row justify-center items-center'>
						<EnvelopeIcon className='mt-4 fill-primary' size={20} />
						<p className='mt-4 ml-4'>{contactHeroData.contactInfo.email}</p>
					</a>
					<a target='_blank' rel='noreferrer' href={contactHeroData.contactInfo.googleMapsUrl} className='contact-item flex flex-row justify-center items-center'>
						<MapIcon className='mt-4 fill-primary' size={20} />
						<div className='mt-4 ml-4'>
							<p className='m-0'>{contactHeroData.contactInfo.addressStreet} </p>
							<p className='m-0'>{contactHeroData.contactInfo.addressCity}</p>
						</div>
					</a>
				</div>
			</div>

			<div className='hidden sm:block py-[7%] w-px h-[90%] bg-black m-8 self-center justify-self-center' />
			<div className='hidden sm:flex justify-center items-center mr-4'>
				<img className='max-h-32 mr-2' alt='brand - dog stencil' src={brand_image_transparent} />
				<div className='p-4 w-min'>
					<h2 className='leading-8 w-min text-nowrap'>South Shore</h2>
					<h2 className='leading-8 w-min text-nowrap'>Mechanical Services</h2>
				</div>
			</div>
		</div>
	);
};

export default ContactHero;
