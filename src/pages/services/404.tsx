import * as React from 'react';
import { Link, HeadFC } from 'gatsby';

import '../styles/NotFound.css';

import data_cable_install from '../images/data-cable-wiring.jpeg';
import { ArrowLeftIcon, Icon } from 'evergreen-ui';

const NotFoundPage: React.FC = () => {
	return (
		<main className='not-found w-screen h-screen flex justify-center items-center'>
			<div className='not-found-card flex flex-row items-center justify-center'>
				<div>
					<Link to={'/'} className='go-back-link flex justify-start items-center hover:cursor-pointer'>
						<Icon className='mb-4' icon={ArrowLeftIcon} />
						<p className='leading-[14px] ml-2'>Go Back</p>
					</Link>
					<img className='w-full max-w-[400px]' src={data_cable_install} alt='Data cable wiring' />
				</div>
				<div className='not-found-card-text text-center flex flex-col items-center'>
					<h1 className='w-2/4 mb-4'>Sorry...</h1>
					<p className='mb-4 w-2/4 overflow-[wrap]'>Were working on some updates to the website right now, please do come back soon!</p>
				</div>
			</div>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
