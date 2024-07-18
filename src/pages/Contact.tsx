import * as React from 'react';
import { Link } from 'gatsby';

import ContactHero from '../components/ContactHero';
import Layout from '../components/layout';
import { contactInfo } from '../components/ContactHero';

import { PhoneIcon, EnvelopeIcon, MapIcon, Icon } from 'evergreen-ui';
import ScheduleServiceForm from '../components/ScheduleServiceForm';

const Contact: React.FC = () => {
	return (
		<Layout>
			<div className='contact-page py-4 h-screen w-screen flex flex-row justify-center items-start'>
				<div className='contact-info w-[45%] px-4 flex flex-row justify-evenly items-start'>
					<div className='contact-links-and-icons-container flex flex-col justify-center items-center '>
						<h1 className='mt-8'>Contact Us</h1>
						<div className='contact-links'>
							<Link target='_blank' rel='noreferrer' to={`tel:${contactInfo.phone}`} className='contact-item pl-4 flex flex-row'>
								<Icon className='mt-4 fill-primary' icon={PhoneIcon} size={20} />
								<p className='mt-4 ml-4'>{contactInfo.phone}</p>
							</Link>
							<Link target='_blank' rel='noreferrer' to={`mailto:${contactInfo.email}`} className='contact-item pl-4 flex flex-row'>
								<Icon className='mt-4 fill-primary' icon={EnvelopeIcon} size={20} />
								<p className='mt-4 ml-4'>{contactInfo.email}</p>
							</Link>
							<a target='_blank' rel='noreferrer' href={'https://maps.app.goo.gl/vsUYpBh3CToxdn3D7'} className='contact-item pl-4 flex flex-row'>
								<Icon className='mt-4 fill-primary' icon={MapIcon} size={20} />
								<div className='contact-info-address-container mt-4 ml-4'>
									<h4>South Shore Mechanical Services</h4>
									<p className='m-0'>{contactInfo.addressStreet} </p>
									<p className='m-0'>{contactInfo.addressCity}</p>
								</div>
							</a>
						</div>
					</div>
					{/* Leave a message form to side */}
				</div>
				<ScheduleServiceForm />
			</div>
		</Layout>
	);
};

export default Contact;
