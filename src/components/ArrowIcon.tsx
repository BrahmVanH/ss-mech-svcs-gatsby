import { IconProps } from '@/types';
import * as React from 'react';

const ArrowIcon: React.FC<IconProps> = ({ size }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' stroke='#fff' fill='#fff' height={`${size}px`} width={`${size}px`} viewBox='0 0 491.36 447.77'>
			<g id='Layer_1-2' data-name='Layer_1'>
				<rect className='cls-1' x='.5' y='176.34' width='440' height='100.5' rx='15.98' ry='15.98' />
				<rect className='cls-1' x='187.57' y='257.83' width='324.8' height='97.11' rx='20' ry='20' transform='translate(-114.14 337.21) rotate(-45)' />
				<rect className='cls-1' x='187.57' y='92.83' width='324.8' height='97.11' rx='20' ry='20' transform='translate(497.47 488.82) rotate(-135)' />
			</g>
		</svg>
	);
};

export default ArrowIcon;
