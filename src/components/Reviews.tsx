import * as React from 'react';
import * as Sentry from '@sentry/react';

// Component imports
import ThumbtackIcon from './ThumbtackIcon';
import StarRating from './StarRating';
import { ArrowRightIcon } from 'evergreen-ui';

// Query imports
import { useLazyQuery } from '@apollo/client';
import { QUERY_THUMBTACK_REVIEWS } from '../lib/graphql';

// Type imports
import { ThumbtackReview } from '../lib/__generated__/graphql';

import thumbtack_reviewer_avatar from '../images/thumbtack_reviewer-avatar.jpeg';

const Reviews: React.FC = () => {
	const [thumbtackReviews, setThumbtackReviews] = React.useState<ThumbtackReview[]>([]);

	const [getThumbtackReviews, { data, error, loading }] = useLazyQuery(QUERY_THUMBTACK_REVIEWS);

	React.useEffect(() => {
		if (error) {
			Sentry.captureException(error);
		}
	}, [error]);

	React.useEffect(() => {
		if (data?.queryThumbtackReviews) {
			setThumbtackReviews(data?.queryThumbtackReviews);
		}
	}, [data]);

	React.useEffect(() => {
		getThumbtackReviews();
	}, []);

	return (
		<div className='thumbtack-reviews-wrapper w-[80%] font-thumbtack-reviews flex flex-col items-center p-8'>
			{!loading && thumbtackReviews.length > 0 ? (
				<div className='thumbtack-reviews flex flex-col items-center w-full'>
					<div className='thumbtack-reviews-header flex justify-center items-center w-full mb-4'>
						<ThumbtackIcon />
						<h2 className='ml-4'>Thumbtack Reviews</h2>
					</div>
					{thumbtackReviews.map((review, index) => (
						<div key={index} className='thumbtack-review-card w-full text-left flex flex-col justify-start py-4 px-0 border-b border-[#d3d4d5] mb-4'>
							<div className='thumbtack-review-card-header flex justify-between items-center mb-4 '>
								<div className='customer-info flex items-center'>
									<img className='w-[50px] h-[50px] rounded-[50%] mr-0' src={thumbtack_reviewer_avatar} alt="thumbtack reviewer's avatar" />
									<div className='customer-name-and-rating flex flex-col items-start ml-4 font-extrabold'>
										<h3>{review.author?.name}</h3>
										<StarRating overallRating={review.reviewRating?.ratingValue} />
									</div>
								</div>
								<p className='review-date font-[0.8rem] text-[#7a7a7a] pb-4'>{review.datePublished}</p>
							</div>
							<p>{review.description}</p>
						</div>
					))}

					<a
						className='read-more-link bg-[#6f7077] text-white rounded-[10px] p-[10px] self-end mr-4 flex justify-end text-right font-[12px] leading-[14px] hover:scale-95'
						href='https://www.thumbtack.com/mi/marquette/handyman/south-shore-mechanical-services/service/508465315204210696?category_pk=109125193401647362&from_static_sp=true&zip_code=49855'
						target='_blank'
						rel='noreferrer'>
						<p>More Reviews</p>
						<ArrowRightIcon style={{ margin: '0rem 0.5rem' }} size={14} />
					</a>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Reviews;
