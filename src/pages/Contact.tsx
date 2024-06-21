import * as React from 'react';
import { Link } from 'gatsby';

import ContactHero from '../components/ContactHero';
import Layout from '../components/layout';
import { contactInfo } from '../components/ContactHero';

import { PhoneIcon, EnvelopeIcon, MapIcon, Icon } from 'evergreen-ui';

const Contact: React.FC = () => {
	return (
		<Layout>
			<div className='contact-page'>
				<div className='contact-info'>
					<h2>Contact Us</h2>
					<div className='contact-links-icons-container'>
						<div className='contact-links'>
							<Link target='_blank' rel='noreferrer' to={`tel:${contactInfo.phone}`} className='contact-item'>
								<Icon style={{ marginTop: '1rem' }} icon={PhoneIcon} size={20} />
								<p>{contactInfo.phone}</p>
							</Link>
							<Link target='_blank' rel='noreferrer' to={`mailto:${contactInfo.email}`} className='contact-item'>
								<Icon style={{ marginTop: '1rem' }} icon={EnvelopeIcon} size={20} />
								<p>{contactInfo.email}</p>
							</Link>
							<a target='_blank' rel='noreferrer' href={'https://maps.app.goo.gl/vsUYpBh3CToxdn3D7'} className='contact-item'>
								<Icon style={{ marginTop: '1rem' }} icon={MapIcon} size={20} />
								<div className='contact-info-address-container'>
									<h4>South Shore Mechanical Services</h4>
									<p>{contactInfo.addressStreet} </p>
									<p>{contactInfo.addressCity}</p>
								</div>
							</a>
						</div>
						{/* Icons */}
						<div className='contact-icons'>
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
					{/* Leave a message form to side */}
					<div className='contact-form-container'>
						<form>
							<input type='text' placeholder='Name' />
							<input type='email' placeholder='Email' />
							<textarea placeholder='Message' />
							<button>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
