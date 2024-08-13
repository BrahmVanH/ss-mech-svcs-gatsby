import * as React from 'react';

const ServicesCard: React.FC<{ name: string; description: string; img: string }> = ({ name, description, img }) => {
	return (
		<>
			{img ? (
				<div
					style={{ backgroundImage: `url(${img})` }}
					className={`services-page-card h-min text-white flex flex-col justify-between items-center w-full rounded-2xl border-l border-r border-opacity-100 border-black text-center  bg-cover bg-no-repeat`}>
					<div className='w-full h-full relative top-0 z-[1000] bg-primary bg-opacity-85 p-2 rounded-2xl '>
						<h3 className='mt-4 py-0 px-4'>{name}</h3>
						<p className='p-4 z-[800] text-[18px]'>{description}</p>
					</div>
				</div>
			) : (
				<div
					className={`services-page-card h-[35vh] text-white flex flex-col justify-between items-center w-full rounded-2xl border-l border-r border-opacity-100 border-black text-center  bg-cover bg-no-repeat`}>
					<div className='w-full h-full relative top-0 z-[1000] bg-primary bg-opacity-85 p-2 rounded-2xl '>
						<h3 className='mt-4 py-0 px-4'>{name}</h3>
						<p className='p-4 z-[800] text-[18px]'>{description}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default ServicesCard;
