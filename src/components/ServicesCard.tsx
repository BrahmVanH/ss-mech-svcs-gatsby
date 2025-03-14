import * as React from 'react';
import { Card } from './ui/card';

const ServicesCard: React.FC<{ name: string; description: string; img?: string }> = ({ name, description, img }) => {
	return (
		<>
			{img ? (
				<Card
					style={{ backgroundImage: `url(${img})` }}
					className=' text-white flex flex-col justify-between items-center h-full w-full rounded-2xl border-l border-r border-opacity-100 border-black text-center  bg-cover bg-no-repeat'>
					<div className='w-full h-full relative top-0 z-[1000] bg-primary opacity-90  px-2 pb-4 pt-2 rounded-2xl '>
						<h3 className='mt-4 py-0 px-4 font-black'>{name}</h3>
						<p className='p-4 z-[800] text-[18px]'>{description}</p>
					</div>
				</Card>
			) : (
				<Card className={`h-[35vh] text-white flex flex-col justify-between items-center w-full rounded-2xl border-l border-r border-opacity-100 border-black text-center  bg-cover bg-no-repeat`}>
					<div className='w-full h-full relative top-0 z-[1000] bg-primary opacity-85 px-2 pb-4 pt-2 rounded-2xl '>
						<h3 className='mt-4 py-0 px-4 font-black'>{name}</h3>
						<p className='p-4 z-[800] text-[18px]'>{description}</p>
					</div>
				</Card>
			)}
		</>
	);
};

export default ServicesCard;
