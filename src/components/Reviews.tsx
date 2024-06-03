import React from 'react';
import '../styles/Reviews.css';
import scrape from '../utils/thumbtack_scraper';

const Reviews: React.FC = () => {
	const [thumbtackReviews, setThumbtackReviews] = React.useState<string | null>(null);

	const getThumbtackReviews = React.useCallback(async () => {
		const thumbtackReviews = await scrape();
		if (!thumbtackReviews) {
			console.log('Error fetching reviews');
			// console.log(thumbtackReviews);
		}
		console.log('Thumbtack reviews:', thumbtackReviews);
		// setThumbtackReviews(thumbtackReviews);
	}, []);

	React.useEffect(() => {
		getThumbtackReviews();
	}, []);

	React.useEffect(() => {
		if (thumbtackReviews) {
			console.log('thumbtack reviews: ', thumbtackReviews);
		}
	}, [thumbtackReviews]);

	return <div className='reviews'>{/* <div className='sk-ww-thumbtack-reviews' data-embed-id='25419011'></div> */}</div>;
};

export default Reviews;
