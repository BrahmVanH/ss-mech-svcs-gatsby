import * as React from 'react';

const ServicesCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
	return (
		<div className='services-page-card text-white flex flex-col justify-between items-center w-full rounded-2xl border-l border-r border-opacity-100 border-black text-center bg-temp-services-card bg-cover bg-no-repeat'>
			<div className='w-full h-full bg-primary bg-opacity-85 p-2 rounded-card '>
				{/* <div className='header' /> */}
				<h3 className='mt-4 py-0 px-4'>{title}</h3>
				<p className='p-4 z-[800]'>{description}</p>
				{/* <div className='footer' /> */}
			</div>
		</div>
	);
};

export default ServicesCard;
