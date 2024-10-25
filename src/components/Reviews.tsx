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
import { CardContent } from './ui/card';
import ArrowIcon from './ArrowIcon';

const Reviews: React.FC = () => {
	const [thumbtackReviews, setThumbtackReviews] = React.useState<ThumbtackReview[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);

	const [getThumbtackReviews] = useLazyQuery(QUERY_THUMBTACK_REVIEWS);

	const handleGetAndSetThumbtackReviews = React.useCallback(async () => {
		try {
			const { loading, error, data } = await getThumbtackReviews();
			if (error) {
				Sentry.captureException(error);
			}
			if (data && !loading) {
				setThumbtackReviews(data?.queryThumbtackReviews);
				setLoading(false);
			}
		} catch (error) {
			Sentry.captureException(error);
		}
	}, []);

	React.useEffect(() => {
		handleGetAndSetThumbtackReviews();
	}, []);

	return (
		<div className='w-[80%] font-thumbtack-reviews flex flex-col items-center'>
			{!loading && thumbtackReviews.length > 0 ? (
				<div className='flex flex-col items-center w-full'>
					<div className='flex justify-center items-center w-full mb-4'>
						<ThumbtackIcon size={36} />
						<h2 className='ml-4'>Thumbtack Reviews</h2>
					</div>
					{thumbtackReviews.map((review, index) => (
						<div key={index} className=' w-full text-left flex flex-col justify-start py-4 px-0 border-b border-[#d3d4d5] mb-4'>
							<CardContent className=' flex justify-between items-center mb-4 '>
								<div className='customer-info flex items-center'>
									<img className='w-[50px] h-[50px] rounded-[50%] mr-0' src={thumbtack_reviewer_avatar} alt="thumbtack reviewer's avatar" />
									<div className='customer-name-and-rating flex flex-col items-start ml-4 font-extrabold'>
										<h3>{review.author?.name}</h3>
										<StarRating overallRating={review.reviewRating?.ratingValue} />
									</div>
								</div>
								<p className='font-[0.8rem] text-[#7a7a7a] pb-4'>{review.datePublished}</p>
								<p className='w-3/4'>{review.description}</p>
							</CardContent>
						</div>
					))}

					<a
						className='bg-[#6f7077] text-white rounded-[10px] p-4 self-end mr-4 inline-flex items-center text-right gap-2   hover:scale-95 [&>*]:my-auto [&>svg]:ml-2'
						href='https://www.thumbtack.com/mi/marquette/handyman/south-shore-mechanical-services/service/508465315204210696?category_pk=109125193401647362&from_static_sp=true&zip_code=49855'
						target='_blank'
						rel='noreferrer'>
						<span className=' leading-none'>Leave a review</span>
						{/* <ArrowRightIcon style={{ margin: '0rem 0.5rem', padding: '0rem' }} size={14} /> */}
						<ArrowIcon size={12} />
					</a>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Reviews;
