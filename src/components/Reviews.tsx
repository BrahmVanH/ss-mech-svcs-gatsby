import React from 'react';
import '../styles/Reviews.css';
import { useQuery } from '@apollo/client';
import { QUERY_THUMBTACK_REVIEWS } from '../lib/API/graphql';

const Reviews: React.FC = () => {
	const [thumbtackReviews, setThumbtackReviews] = React.useState<string | null>(null);

	const { data, error, loading } = useQuery(QUERY_THUMBTACK_REVIEWS);

	React.useEffect(() => {
		if (error) {
			console.log('error: ', error);
		}
	}, [error]);

	React.useEffect(() => {
		if (data) {
			console.log('data: ', data);
		}
	}, [data]);



	React.useEffect(() => {
		if (thumbtackReviews) {
			console.log('thumbtack reviews: ', thumbtackReviews);
		}
	}, [thumbtackReviews]);

	return <div className='reviews'>{/* <div className='sk-ww-thumbtack-reviews' data-embed-id='25419011'></div> */}</div>;
};

export default Reviews;
