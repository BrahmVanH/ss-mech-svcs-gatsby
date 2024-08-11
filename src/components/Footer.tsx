import * as React from 'react';
import ContactHero from './ContactHero';
import { useLocation } from '@reach/router';

import { PhoneIcon, EnvelopeIcon, MapIcon, Icon } from 'evergreen-ui';

import contactHeroData from '../lib/data/ContactHero.json';

const Footer: React.FC = () => {
	const [isOnContactPage, setIsOnContactPage] = React.useState<boolean>(false);

	const location = useLocation();
	React.useEffect(() => {
		if (location.pathname === `/Contact/`) {
			setIsOnContactPage(true);
		} else {
			setIsOnContactPage(false);
		}
	}, [location]);

	return (
		<footer className='w-full flex flex-col justify-center items-center'>
			{isOnContactPage ? <></> : <ContactHero />}
			<div className=' bg-white flex justify-between items-center sm:block  w-full'>
				<a target='_blank' rel='noreferrer' href={contactHeroData.contactInfo.website}>
					<p className='w-full p-2 text-[10px] text-center sm:text-left'>© 2024, South Shore Technical Services, LLC</p>
				</a>
				<div className='flex p-4 w-min flex-row  sm:hidden'>
					<a target='_blank' rel='noreferrer' href={`tel:${contactHeroData.contactInfo.phone}`} className='mx-4 my-0 fill-black no-underline text-base'>
						<PhoneIcon className='mt-4' size={16} />
					</a>
					<a target='_blank' rel='noreferrer' href={`mailto:${contactHeroData.contactInfo.email}`} className=' mx-4 my-0 fill-black no-underline text-base'>
						<EnvelopeIcon className='mt-4' size={16} />
					</a>
					<a target='_blank' rel='noreferrer' href={contactHeroData.contactInfo.googleMapsUrl} className=' mx-4 my-0 fill-black no-underline text-base'>
						<MapIcon className='mt-4' size={16} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
