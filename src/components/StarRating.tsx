import * as React from 'react';
import { StarEmptyIcon, StarIcon } from 'evergreen-ui';

type StarRatingProps = {
	overallRating: number;
};

const StarRating: React.FC<StarRatingProps> = (props: Readonly<StarRatingProps>) => {
	// This component renders a number of filled x unfilled starts
	// based on the value of the overallRating var passed in
	// It uses tailwind css to style the stars
	const rating = props.overallRating;

	return (
		<>
			{rating === 1 ? (
				<div className='container w-[80%] flex flex-nowrap justify-evenly items-center self-start mb-2 [&>svg]:fill-thumbtack-review-star-fill'>
					<StarIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
				</div>
			) : rating === 2 ? (
				<div className='w-[80%] flex flex-nowrap justify-evenly items-center self-start mb-2 [&>svg]:fill-thumbtack-review-star-fill'>
					<StarIcon />
					<StarIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
				</div>
			) : rating === 3 ? (
				<div className='w-[80%] flex flex-nowrap justify-evenly items-center self-start mb-2 [&>svg]:fill-thumbtack-review-star-fill'>
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarEmptyIcon />
					<StarEmptyIcon />
				</div>
			) : rating === 4 ? (
				<div className='w-[80%] flex flex-nowrap justify-evenly items-center self-start mb-2 [&>svg]:fill-thumbtack-review-star-fill'>
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarEmptyIcon />
				</div>
			) : rating === 5 ? (
				<div className='w-[80%] flex flex-nowrap justify-evenly items-center self-start mb-2 [&>svg]:fill-thumbtack-review-star-fill'>
					<StarIcon fill='thumbtack-review-star-fill' />
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
				</div>
			) : (
				<div className='w-[80%] flex flex-nowrap justify-evenly items-center self-start mb-2 [&>svg]:fill-thumbtack-review-star-fill'>
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
