import * as React from 'react';
import { StarEmptyIcon, StarIcon } from 'evergreen-ui';

import '../styles/StarRating.css';

// Styled component for local use

type StarRatingProps = {
	overallRating: number;
};

const StarRating: React.FC<StarRatingProps> = (props: Readonly<StarRatingProps>) => {
	// This component renders a number of filled x unfilled starts
	// based on the value of the overallRating var passed in
	const rating = props.overallRating;

	return (
		<>
			{rating === 1 ? (
				<div className='star-rating-container'>
					<StarIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
				</div>
			) : rating === 2 ? (
				<div className='star-rating-container'>
					<StarIcon />
					<StarIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
				</div>
			) : rating === 3 ? (
				<div className='star-rating-container'>
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
				</div>
			) : rating === 4 ? (
				<div className='star-rating-container'>
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarEmptyIcon />
				</div>
			) : rating === 5 ? (
				<div className='star-rating-container'>
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
				</div>
			) : (
				<div className='star-rating-container'>
					<StarEmptyIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
				</div>
			)}
		</>
	);
};

export default StarRating;
