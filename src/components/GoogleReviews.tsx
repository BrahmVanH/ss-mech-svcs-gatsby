import * as React from 'react';
import * as Sentry from '@sentry/react';

import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';
import { GoogleReview } from '../lib/__generated__/graphql';
import { QUERY_GOOGLE_REVIEWS } from '../lib/graphql/queries';
import { useLazyQuery } from '@apollo/client';

import GoogleIcon from './GoogleIcon';

const GoogleReviews = () => {
	const [reviews, setReviews] = React.useState<GoogleReview[] | null>(null);
	const [loading, setLoading] = React.useState<boolean>(true);

	const [queryGoogleReviews] = useLazyQuery(QUERY_GOOGLE_REVIEWS);

	const handleQueryGoogleReviews = React.useCallback(async () => {
		try {
			const { loading, error, data } = await queryGoogleReviews();

			if (error) {
				Sentry.captureException(error);
			}

			if (data && !loading) {
				setReviews(data?.querySouthShoreGooglePlaceReviews);
				setLoading(false);
			}
		} catch (error) {
			Sentry.captureException(error);
		}
	}, []);

	const renderStars = React.useCallback((rating: number) => {
		return Array.from({ length: 5 }).map((_, index) => <Star key={index} className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />);
	}, []);

	React.useEffect(() => {
		handleQueryGoogleReviews();
	}, []);

	return (
		<div className='w-[80%] my-8'>
			{!loading && reviews && reviews.length > 0 ? (
				<>
					<div className='flex justify-center items-center w-full mb-8'>
						<GoogleIcon size={36} />
						<h2 className='ml-4 '>Reviews</h2>
					</div>
					{reviews.map((review, index) => (
						<Card key={index} className='w-full mt-4'>
							<CardContent className='p-6'>
								<div className='flex items-center space-x-4 mb-2'>
									<img src={review.profile_photo_url ?? ''} alt={review.author_name as string} className='w-10 h-10 rounded-full' />
									<div className='w-full flex flex-row justify-between '>
										<div>
											<h3 className='font-semibold'>{review.author_name}</h3>
											<div className='flex'>{renderStars(review.rating as number)}</div>
										</div>
										<a
											href='https://www.google.com/search?q=south+shore+mechanical+services&oq=south+shore+mech&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYPTIGCAMQRRg8MgYIBBBFGDzSAQgyMTE4ajBqMagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x4d4e2150da5d7943:0xda48f9ec9ac108ae,1,,,,'
											target='_blank'
											rel='noreferrer'
											className='text-black mr-2 hidden sm:block hover:underline'>
											View on Google
										</a>
									</div>
								</div>
								<p className='text-gray-600 mt-2'>{review.text}</p>
								<p className='text-sm text-gray-400 mt-2'>{new Date((review.time as number) * 1000).toLocaleDateString()}</p>
								<a
									href='https://www.google.com/search?q=south+shore+mechanical+services&oq=south+shore+mech&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYPTIGCAMQRRg8MgYIBBBFGDzSAQgyMTE4ajBqMagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x4d4e2150da5d7943:0xda48f9ec9ac108ae,1,,,,'
									target='_blank'
									rel='noreferrer'
									className='text-black mr-2  sm:hidden hover:underline'>
									View on Google
								</a>
							</CardContent>
						</Card>
					))}
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default GoogleReviews;
