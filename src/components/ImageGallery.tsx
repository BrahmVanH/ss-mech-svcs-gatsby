// src/components/ImageGallery.js
import * as React from 'react';
import { IImage } from '../types';

const ImageGallery = ({ images }: { images: IImage[] }) => {
	const [currentIndex, setCurrentIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 8000);

		return () => clearInterval(intervalId);
	}, [images.length]);

	return (
		<div className='relative w-full h-full overflow-hidden'>
			<div className='flex transition-transform duration-1000 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
				{images.map((image) => (
					<div key={image.key} className='w-full flex-shrink-0'>
						<img src={image.url} alt={image.alt} className='w-full h-full object-cover' />
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageGallery;
