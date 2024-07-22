import * as React from 'react';
import ContactHero from './ContactHero';
import { Link } from 'gatsby';

import { PhoneIcon, EnvelopeIcon, MapIcon, Icon } from 'evergreen-ui';

// import '../styles/Footer.css';

const Footer: React.FC = () => {
	const contactInfo = {
		addressStreet: '908 Champion St.,',
		addressCity: 'Marquette, MI 49855',
		phone: '906-236-2760',
		email: 'info@southshoremechanical.services',
	};

	const [isOnContactPage, setIsOnContactPage] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (window.location.pathname === `/Contact/`) {
			setIsOnContactPage(true);
		} else {
			setIsOnContactPage(false);
		}
	}, []);

	return (
		<footer className='w-full flex flex-col justify-center items-center'>
			{isOnContactPage ? <></> : <ContactHero />}
			<div className=' bg-white flex justify-between items-center sm:block  w-full'>
				<a target='_blank' rel='noreferrer' href='https://brahmvanhouzen.studio/'>
					<p className='copy-right w-full p-2 text-[10px] text-center sm:text-left'>© 2024, South Shore Technical Services, LLC</p>
				</a>
				<div className='flex p-4 w-min flex-row  sm:hidden'>
					<Link target='_blank' rel='noreferrer' to={`tel:${contactInfo.phone}`} className='mx-4 my-0 fill-black no-underline text-base'>
						<Icon className='mt-4' icon={PhoneIcon} size={16} />
					</Link>
					<Link target='_blank' rel='noreferrer' to={`mailto:${contactInfo.email}`} className=' mx-4 my-0 fill-black no-underline text-base'>
						<Icon className='mt-4' icon={EnvelopeIcon} size={16} />
					</Link>
					<Link target='_blank' rel='noreferrer' to={'https://maps.app.goo.gl/vsUYpBh3CToxdn3D7'} className=' mx-4 my-0 fill-black no-underline text-base'>
						<Icon className='mt-4' icon={MapIcon} size={16} />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
