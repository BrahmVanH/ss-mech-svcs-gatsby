import * as React from 'react';
import { HeadFC } from 'gatsby';

import Layout from '../components/layout';
import { contactInfo } from '../components/ContactHero';
import ScheduleServiceForm from '../components/ScheduleServiceForm';
import SEO from '../components/SEO';

import { PhoneIcon, EnvelopeIcon, MapIcon } from 'evergreen-ui';

const Contact: React.FC = () => {
	return (
		<Layout>
			<div className='contact-page py-4 h-screen w-screen flex flex-col sm:flex-row justify-center items-center sm:items-start'>
				<div className='contact-info w-full  sm:w-[45%] px-4 flex flex-row justify-evenly items-start'>
					<div className='contact-links-and-icons-container flex flex-col justify-center items-center '>
						<h1 className='mt-8'>Contact Us</h1>
						<div className='contact-links'>
							<a target='_blank' rel='noreferrer' href={`tel:${contactInfo.phone}`} className='contact-item pl-4 flex flex-row'>
								<PhoneIcon className='mt-4 fill-primary' size={20} />
								<p className='mt-4 ml-4'>{contactInfo.phone}</p>
							</a>
							<a target='_blank' rel='noreferrer' href={`mailto:${contactInfo.email}`} className='contact-item pl-4 flex flex-row'>
								<EnvelopeIcon className='mt-4 fill-primary' size={20} />
								<p className='mt-4 ml-4'>{contactInfo.email}</p>
							</a>
							<a target='_blank' rel='noreferrer' href={'https://maps.app.goo.gl/vsUYpBh3CToxdn3D7'} className='contact-item pl-4 flex flex-row'>
								<MapIcon className='mt-4 fill-primary' size={20} />
								<div className='contact-info-address-container mt-4 ml-4'>
									<h4>South Shore Mechanical Services</h4>
									<p className='m-0'>{contactInfo.addressStreet} </p>
									<p className='m-0'>{contactInfo.addressCity}</p>
								</div>
							</a>
						</div>
					</div>
				</div>
				<ScheduleServiceForm />
			</div>
		</Layout>
	);
};

export default Contact;

export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='Contact' />;
