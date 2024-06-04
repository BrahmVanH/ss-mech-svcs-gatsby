import React from 'react';
import '../styles/Reviews.css';
import { useQuery } from '@apollo/client';
import { QUERY_THUMBTACK_REVIEWS } from '../lib/API/graphql';
import { ThumbtackReview } from '../lib/__generated__/graphql';
import ThumbtackIcon from './ThumbtackIcon';
import StarRating from './StarRating';
import { ArrowRightIcon } from 'evergreen-ui';

import thumbtack_reviewer_avatar from '../images/thumbtack_reviewer-avatar.jpg';
import { Link } from 'gatsby';

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

	React.useEffect(() => {
		if (thumbtackReviews) {
			console.log('thumbtack reviews: ', thumbtackReviews);
		}
	}, [thumbtackReviews]);

	return (
		<div className='thumbtack-reviews-wrapper'>
			{!loading && thumbtackReviews.length > 0 ? (
				<div className='thumbtack-reviews'>
					<div className='thumbtack-reviews-header'>
						<ThumbtackIcon />
						<h2>Thumbtack Reviews</h2>
					</div>
					{thumbtackReviews.map((review, index) => (
						<div key={index} className='thumbtack-review-card'>
							<div className='thumbtack-review-card-header'>
								<div className='customer-info'>
									<img src={thumbtack_reviewer_avatar} alt="thumbtack reviewer's avatar" />
									<div className='customer-name-and-rating'>
										<h3>{review.author?.name}</h3>
										<StarRating overallRating={review.reviewRating?.ratingValue} />
									</div>
								</div>
								<p className='review-date'>{review.datePublished}</p>
							</div>
							<p>{review.description}</p>
						</div>
					))}

					<Link
						className='read-more-link'
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
