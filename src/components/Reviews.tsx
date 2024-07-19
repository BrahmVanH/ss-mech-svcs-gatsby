import * as React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'gatsby';

import { QUERY_THUMBTACK_REVIEWS } from '../lib/graphql';

import ThumbtackIcon from './ThumbtackIcon';
import StarRating from './StarRating';

import { ArrowRightIcon } from 'evergreen-ui';

import { ThumbtackReview } from '../lib/__generated__/graphql';

import thumbtack_reviewer_avatar from '../images/thumbtack_reviewer-avatar.jpg';

// import '../styles/Reviews.css';

const Reviews: React.FC = () => {
	const [thumbtackReviews, setThumbtackReviews] = React.useState<ThumbtackReview[]>([]);

	const { data, error, loading } = useQuery(QUERY_THUMBTACK_REVIEWS);

	React.useEffect(() => {
		if (error) {
			console.log('error: ', error);
		}
	}, [error]);

	React.useEffect(() => {
		if (data?.queryThumbtackReviews) {
			setThumbtackReviews(data?.queryThumbtackReviews);
		}
	}, [data]);

	// React.useEffect(() => {
	// 	if (thumbtackReviews) {
	// 		console.log('thumbtack reviews: ', thumbtackReviews);
	// 	}
	// }, [thumbtackReviews]);

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

					<Link
						className='read-more-link bg-[#6f7077] text-white rounded-[10px] p-[10px] self-end mr-4 flex justify-end text-right font-[12px] leading-[14px] hover:scale-95'
						to='https://www.thumbtack.com/mi/marquette/handyman/south-shore-mechanical-services/service/508465315204210696?category_pk=109125193401647362&from_static_sp=true&zip_code=49855'
						target='_blank'
						rel='noreferrer'>
						<p>More Reviews</p>
						<ArrowRightIcon style={{ margin: '0rem 0.5rem' }} size={14} />
					</Link>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Reviews;
