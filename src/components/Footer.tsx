import * as React from 'react';
import ContactHero from './ContactHero';
import { useLocation } from '@reach/router';

import { PhoneIcon, EnvelopeIcon, MapIcon, Icon } from 'evergreen-ui';

const Footer: React.FC = () => {
	const contactInfo = {
		addressStreet: '908 Champion St.,',
		addressCity: 'Marquette, MI 49855',
		phone: '906-236-2760',
		email: 'info@southshoremechanical.services',
	};

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
				<a target='_blank' rel='noreferrer' href='https://brahmvanhouzen.studio/'>
					<p className='copy-right w-full p-2 text-[10px] text-center sm:text-left'>© 2024, South Shore Technical Services, LLC</p>
				</a>
				<div className='flex p-4 w-min flex-row  sm:hidden'>
					<a target='_blank' rel='noreferrer' href={`tel:${contactInfo.phone}`} className='mx-4 my-0 fill-black no-underline text-base'>
						{/* <Icon className='mt-4' icon={PhoneIcon} size={16} /> */}
						<PhoneIcon className='mt-4' size={16} />
					</a>
					<a target='_blank' rel='noreferrer' href={`mailto:${contactInfo.email}`} className=' mx-4 my-0 fill-black no-underline text-base'>
						{/* <Icon className='mt-4' icon={EnvelopeIcon} size={16} /> */}
						<EnvelopeIcon className='mt-4' size={16} />
					</a>
					<a target='_blank' rel='noreferrer' href={'https://maps.app.goo.gl/vsUYpBh3CToxdn3D7'} className=' mx-4 my-0 fill-black no-underline text-base'>
						{/* <Icon className='mt-4' icon={MapIcon} size={16} /> */}
						<MapIcon className='mt-4' size={16} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
