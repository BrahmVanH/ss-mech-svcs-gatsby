import { gql } from '../__generated__/gql';

export const QUERY_THUMBTACK_REVIEWS = gql(/* GraphQL */ `
	query QueryThumbtackReviews {
		queryThumbtackReviews {
			datePublished
			description
			author {
				name
			}
			reviewRating {
				ratingValue
			}
		}
	}
`);
