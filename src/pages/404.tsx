import * as React from 'react';
import { HeadFC } from 'gatsby';

import '../styles/NotFound.css';

import data_cable_install from '../images/data-cable-wiring.jpeg';

const NotFoundPage: React.FC = () => {
	return (
		<main className='not-found'>
			<div>
				<img src={data_cable_install} alt='Data cable wiring' />
				<div className='not-found-card-text'>
					<h1>Sorry...</h1>
					<p>Were working on some updates to the website right now, please do come back soon!</p>
				</div>
			</div>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
