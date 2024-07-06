import * as React from 'react';
import { HeadFC, Link } from 'gatsby';

import '../../styles/NotFound.css';

import data_cable_install from '../../images/data-cable-wiring.jpeg';
import { ArrowLeftIcon } from 'evergreen-ui';

const NotFoundPage: React.FC = () => {
	return (
		<main className='not-found'>
			<div className='not-found-card'>
				<div>
					<Link to={'/'} className='go-back-link'>
						<ArrowLeftIcon />
						<p>Go Back</p>
					</Link>
					<img src={data_cable_install} alt='Data cable wiring' />
				</div>
				<div className='not-found-card-text'>
					<h1>Sorry...</h1>
					<p>Were working on some updates to the website right now, please do come back soon!</p>
				</div>
			</div>
		</main>
	);
};

export default NotFoundPage;

// export const Head: HeadFC = () => <title>Not found</title>;
