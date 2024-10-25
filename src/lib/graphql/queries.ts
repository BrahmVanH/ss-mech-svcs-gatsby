// import { gql as generatedGql } from '../__generated__/gql';
import { gql } from '@apollo/client';
import { graphql } from 'gatsby';

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

export const GET_PRESIGNED_S3_URLS = gql(/* GraphQL */ `
	query getPresignedS3Objects($keys: [String!]!) {
		getPresignedS3Objects(keys: $keys) {
			key
			url
			alt
		}
	}
`);

export const QUERY_GOOGLE_REVIEWS = gql(/* GraphQL */ `
	query QuerySouthShoreGooglePlaceReviews {
		querySouthShoreGooglePlaceReviews {
			author_name
			author_url
			language
			profile_photo_url
			rating
			relative_time_description
			text
			time
		}
	}
`);
