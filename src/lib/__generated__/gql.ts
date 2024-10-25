/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tmutation sendScheduleServiceMessage($input: ScheduleServiceMessageInput!) {\n\t\tsendScheduleServiceMessage(input: $input)\n\t}\n": types.SendScheduleServiceMessageDocument,
    "\n\tquery QueryThumbtackReviews {\n\t\tqueryThumbtackReviews {\n\t\t\tdatePublished\n\t\t\tdescription\n\t\t\tauthor {\n\t\t\t\tname\n\t\t\t}\n\t\t\treviewRating {\n\t\t\t\tratingValue\n\t\t\t}\n\t\t}\n\t}\n": types.QueryThumbtackReviewsDocument,
    "\n\tquery getPresignedS3Objects($keys: [String!]!) {\n\t\tgetPresignedS3Objects(keys: $keys) {\n\t\t\tkey\n\t\t\turl\n\t\t\talt\n\t\t}\n\t}\n": types.GetPresignedS3ObjectsDocument,
    "\n\tquery QuerySouthShoreGooglePlaceReviews {\n\t\tquerySouthShoreGooglePlaceReviews {\n\t\t\tauthor_name\n\t\t\tauthor_url\n\t\t\tlanguage\n\t\t\tprofile_photo_url\n\t\t\trating\n\t\t\trelative_time_description\n\t\t\ttext\n\t\t\ttime\n\t\t}\n\t}\n": types.QuerySouthShoreGooglePlaceReviewsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation sendScheduleServiceMessage($input: ScheduleServiceMessageInput!) {\n\t\tsendScheduleServiceMessage(input: $input)\n\t}\n"): (typeof documents)["\n\tmutation sendScheduleServiceMessage($input: ScheduleServiceMessageInput!) {\n\t\tsendScheduleServiceMessage(input: $input)\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery QueryThumbtackReviews {\n\t\tqueryThumbtackReviews {\n\t\t\tdatePublished\n\t\t\tdescription\n\t\t\tauthor {\n\t\t\t\tname\n\t\t\t}\n\t\t\treviewRating {\n\t\t\t\tratingValue\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery QueryThumbtackReviews {\n\t\tqueryThumbtackReviews {\n\t\t\tdatePublished\n\t\t\tdescription\n\t\t\tauthor {\n\t\t\t\tname\n\t\t\t}\n\t\t\treviewRating {\n\t\t\t\tratingValue\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery getPresignedS3Objects($keys: [String!]!) {\n\t\tgetPresignedS3Objects(keys: $keys) {\n\t\t\tkey\n\t\t\turl\n\t\t\talt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getPresignedS3Objects($keys: [String!]!) {\n\t\tgetPresignedS3Objects(keys: $keys) {\n\t\t\tkey\n\t\t\turl\n\t\t\talt\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery QuerySouthShoreGooglePlaceReviews {\n\t\tquerySouthShoreGooglePlaceReviews {\n\t\t\tauthor_name\n\t\t\tauthor_url\n\t\t\tlanguage\n\t\t\tprofile_photo_url\n\t\t\trating\n\t\t\trelative_time_description\n\t\t\ttext\n\t\t\ttime\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery QuerySouthShoreGooglePlaceReviews {\n\t\tquerySouthShoreGooglePlaceReviews {\n\t\t\tauthor_name\n\t\t\tauthor_url\n\t\t\tlanguage\n\t\t\tprofile_photo_url\n\t\t\trating\n\t\t\trelative_time_description\n\t\t\ttext\n\t\t\ttime\n\t\t}\n\t}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;