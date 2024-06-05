/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DeleteS3ObjectInput = {
  imgKeys: Array<Scalars['String']['input']>;
};

export type DeleteS3ObjectResponse = {
  __typename?: 'DeleteS3ObjectResponse';
  message: Scalars['String']['output'];
  status: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getPresignedS3Url: Scalars['String']['output'];
  queryThumbtackReviews?: Maybe<Array<ThumbtackReview>>;
};


export type QueryGetPresignedS3UrlArgs = {
  altTag: Scalars['String']['input'];
  commandType: Scalars['String']['input'];
  imgKey: Scalars['String']['input'];
};

export type ThumbtackReview = {
  __typename?: 'ThumbtackReview';
  author: ThumbtackReviewAuthor;
  datePublished: Scalars['String']['output'];
  description: Scalars['String']['output'];
  reviewRating: ThumbtackReviewRating;
};

export type ThumbtackReviewAuthor = {
  __typename?: 'ThumbtackReviewAuthor';
  name: Scalars['String']['output'];
};

export type ThumbtackReviewRating = {
  __typename?: 'ThumbtackReviewRating';
  ratingValue: Scalars['Int']['output'];
};

export type ImageObject = {
  __typename?: 'imageObject';
  imgKey: Scalars['String']['output'];
  original: Scalars['String']['output'];
  originalAlt: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  thumbnailAlt: Scalars['String']['output'];
};

export type QueryThumbtackReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryThumbtackReviewsQuery = { __typename?: 'Query', queryThumbtackReviews?: Array<{ __typename?: 'ThumbtackReview', datePublished: string, description: string, author: { __typename?: 'ThumbtackReviewAuthor', name: string }, reviewRating: { __typename?: 'ThumbtackReviewRating', ratingValue: number } }> | null };


export const QueryThumbtackReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryThumbtackReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryThumbtackReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datePublished"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewRating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ratingValue"}}]}}]}}]}}]} as unknown as DocumentNode<QueryThumbtackReviewsQuery, QueryThumbtackReviewsQueryVariables>;
