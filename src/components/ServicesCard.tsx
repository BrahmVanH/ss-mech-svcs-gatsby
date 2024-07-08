import * as React from 'react';

const ServicesCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
	return (
		<div className='services-page-card text-white'>
			<div className='w-full h-full bg-primary bg-opacity-85 p-2 rounded-card'>
				{/* <div className='header' /> */}
				<h3 className=''>{title}</h3>
				<p>{description}</p>
				{/* <div className='footer' /> */}
			</div>
		</div>
	);
};

export default ServicesCard;
