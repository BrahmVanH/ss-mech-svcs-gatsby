import * as React from 'react';

const ServicesCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => {
  return (
		<div className='services-page-card'>
			<div className='header' />
			<h3>{title}</h3>
			<p>{description}</p>
			<div className='footer' />
		</div>
	);
}

export default ServicesCard;