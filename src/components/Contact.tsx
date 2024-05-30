import '../assets/style/Contact.css';

const contactInfo = {
	addressStreet: '908 Champion St.,',
	addressCity: 'Marquette, MI 49855',
	phone: '906-236-2760',
	email: 'brahmvanh@gmail.com',
};

export default function Contact() {
	return (
		<div className='contact-container'>
			<div className='contact-brand'>
				<h2>South Shore</h2>
				<h3>Mechanical Services</h3>
        <p>This should be a few sentences about my mission and purpose and statement and stuff</p>
			</div>
			<div className='contact-info'>
				<p>Address: {contactInfo.addressStreet} </p>
        <p>{contactInfo.addressCity}</p>
        <p>Phone: {contactInfo.phone}</p>
        <p>Email: {contactInfo.email}</p>
			</div>
			<a className='widget' href='https://www.thumbtack.com/mi/marquette/handyman/brahm-van-houzen/service/508465315204210696' target='_blank'>
				<img style={{ height: '192px', width: '192px' }} src='https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/pro-svg/orange/2024.svg' />
				<script src='https://www.thumbtack.com/profile/widgets/scripts/?service_pk=508465315204210696&widget_id=profile'></script>
			</a>
		</div>
	);
}
