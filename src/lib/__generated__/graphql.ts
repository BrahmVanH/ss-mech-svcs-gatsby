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
  email_String_NotNull_maxLength_255_format_email: { input: any; output: any; }
  familyName_String_NotNull_minLength_1_maxLength_20: { input: any; output: any; }
  givenName_String_NotNull_minLength_1_maxLength_20: { input: any; output: any; }
  location_String_NotNull_minLength_1_maxLength_10: { input: any; output: any; }
  message_String_NotNull_minLength_10_maxLength_255_pattern_AZaz09_: { input: any; output: any; }
  service_String_NotNull_minLength_1_maxLength_40: { input: any; output: any; }
  tel_String_NotNull_minLength_1_maxLength_12: { input: any; output: any; }
};

export type DeleteS3ObjectInput = {
  imgKeys: Array<Scalars['String']['input']>;
};

export type DeleteS3ObjectResponse = {
  __typename?: 'DeleteS3ObjectResponse';
  message: Scalars['String']['output'];
  status: Scalars['Int']['output'];
};

export type ImgObj = {
  __typename?: 'ImgObj';
  alt?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  sendScheduleServiceMessage: Scalars['String']['output'];
};


export type MutationSendScheduleServiceMessageArgs = {
  input: ScheduleServiceMessageInput;
};

export type Query = {
  __typename?: 'Query';
  getPresignedS3Objects: Array<ImgObj>;
  queryThumbtackReviews?: Maybe<Array<ThumbtackReview>>;
};


export type QueryGetPresignedS3ObjectsArgs = {
  keys: Array<Scalars['String']['input']>;
};

export type ScheduleServiceMessage = {
  __typename?: 'ScheduleServiceMessage';
  email: Scalars['String']['output'];
  familyName: Scalars['String']['output'];
  givenName: Scalars['String']['output'];
  location: Scalars['String']['output'];
  message: Scalars['String']['output'];
  service: Scalars['String']['output'];
  tel: Scalars['String']['output'];
};

export type ScheduleServiceMessageInput = {
  email: Scalars['email_String_NotNull_maxLength_255_format_email']['input'];
  familyName: Scalars['familyName_String_NotNull_minLength_1_maxLength_20']['input'];
  givenName: Scalars['givenName_String_NotNull_minLength_1_maxLength_20']['input'];
  location: Scalars['location_String_NotNull_minLength_1_maxLength_10']['input'];
  message: Scalars['message_String_NotNull_minLength_10_maxLength_255_pattern_AZaz09_']['input'];
  service: Scalars['service_String_NotNull_minLength_1_maxLength_40']['input'];
  tel: Scalars['tel_String_NotNull_minLength_1_maxLength_12']['input'];
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

export type SendScheduleServiceMessageMutationVariables = Exact<{
  input: ScheduleServiceMessageInput;
}>;


export type SendScheduleServiceMessageMutation = { __typename?: 'Mutation', sendScheduleServiceMessage: string };

export type QueryThumbtackReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryThumbtackReviewsQuery = { __typename?: 'Query', queryThumbtackReviews?: Array<{ __typename?: 'ThumbtackReview', datePublished: string, description: string, author: { __typename?: 'ThumbtackReviewAuthor', name: string }, reviewRating: { __typename?: 'ThumbtackReviewRating', ratingValue: number } }> | null };

export type GetPresignedS3ObjectsQueryVariables = Exact<{
  keys: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetPresignedS3ObjectsQuery = { __typename?: 'Query', getPresignedS3Objects: Array<{ __typename?: 'ImgObj', key?: string | null, url?: string | null, alt?: string | null }> };


export const SendScheduleServiceMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendScheduleServiceMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleServiceMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendScheduleServiceMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<SendScheduleServiceMessageMutation, SendScheduleServiceMessageMutationVariables>;
export const QueryThumbtackReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryThumbtackReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryThumbtackReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datePublished"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewRating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ratingValue"}}]}}]}}]}}]} as unknown as DocumentNode<QueryThumbtackReviewsQuery, QueryThumbtackReviewsQueryVariables>;
export const GetPresignedS3ObjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPresignedS3Objects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keys"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPresignedS3Objects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keys"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keys"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]} as unknown as DocumentNode<GetPresignedS3ObjectsQuery, GetPresignedS3ObjectsQueryVariables>;
