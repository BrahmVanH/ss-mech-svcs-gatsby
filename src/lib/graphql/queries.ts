import { gql as generatedGql } from '../__generated__/gql';
import { gql } from '@apollo/client';

export const QUERY_THUMBTACK_REVIEWS = generatedGql(/* GraphQL */ `
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

