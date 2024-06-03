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

export type Address = {
  __typename?: 'Address';
  _id: Scalars['ID']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  unit: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type AddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  unit: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['ID']['output'];
  user: User;
};

export type CreateCustomerInput = {
  customer: NewCustomerInput;
};

export type CreateInvoiceInput = {
  invoice: NewInvoiceInput;
};

export type CreatePropertyInput = {
  property: NewPropertyInput;
};

export type CreateUserInput = {
  adminCode: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateWorkOrderInput = {
  workOrder: NewWorkOrderInput;
};

export type Customer = {
  __typename?: 'Customer';
  _id: Scalars['ID']['output'];
  businessName: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  invoices: Array<Maybe<Invoice>>;
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  properties: Array<Maybe<Property>>;
  workOrders: Array<Maybe<WorkOrder>>;
};

export type DeleteS3ObjectInput = {
  imgKeys: Array<Scalars['String']['input']>;
};

export type DeleteS3ObjectResponse = {
  __typename?: 'DeleteS3ObjectResponse';
  message: Scalars['String']['output'];
  status: Scalars['Int']['output'];
};

export type Invoice = {
  __typename?: 'Invoice';
  _id: Scalars['ID']['output'];
  charged: Scalars['Boolean']['output'];
  customerId: Customer;
  date: Scalars['String']['output'];
  invoiceNumber: Scalars['String']['output'];
  paid: Scalars['Boolean']['output'];
  quote: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  workOrders: Array<Maybe<WorkOrder>>;
};

export type LoginUserInput = {
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer: Customer;
  createInvoice: Invoice;
  createProperty: Property;
  createUser: Auth;
  createWorkOrder: WorkOrder;
  deleteCustomer: Customer;
  deleteInvoice: Invoice;
  deleteProperty: Property;
  deleteS3Objects: DeleteS3ObjectResponse;
  deleteWorkOrder: WorkOrder;
  loginUser: Auth;
  removeUser: Auth;
  updateCustomerBusinessName: Customer;
  updateCustomerEmail: Customer;
  updateCustomerFirstName: Customer;
  updateCustomerLastName: Customer;
  updateCustomerPhone: Customer;
  updateCustomerProperties: Customer;
  updateInvoiceCharged: Invoice;
  updateInvoiceCustomerId: Invoice;
  updateInvoiceDate: Invoice;
  updateInvoicePaid: Invoice;
  updateInvoiceQuote: Invoice;
  updateInvoiceTotal: Invoice;
  updateInvoiceWorkOrders: Invoice;
  updatePropertyAddress: Property;
  updatePropertyAgent: Property;
  updatePropertyDescription: Property;
  updatePropertyName: Property;
  updatePropertyS3FolderKey: Property;
  updateUserFirstName: Auth;
  updateUserLastName: Auth;
  updateUserPassword: Auth;
  updateUserPin: Auth;
  updateUserUsername: Auth;
  updateWorkOrderCharged: WorkOrder;
  updateWorkOrderComments: WorkOrder;
  updateWorkOrderCompletedBy: WorkOrder;
  updateWorkOrderCustomerId: WorkOrder;
  updateWorkOrderDate: WorkOrder;
  updateWorkOrderDescription: WorkOrder;
  updateWorkOrderPaid: WorkOrder;
  updateWorkOrderPropertyId: WorkOrder;
  updateWorkOrderQuote: WorkOrder;
  updateWorkOrderTotal: WorkOrder;
  updateWorkOrderType: WorkOrder;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateWorkOrderArgs = {
  input: CreateWorkOrderInput;
};


export type MutationDeleteCustomerArgs = {
  input: RemoveCustomerInput;
};


export type MutationDeleteInvoiceArgs = {
  input: RemoveInvoiceInput;
};


export type MutationDeletePropertyArgs = {
  input: RemovePropertyInput;
};


export type MutationDeleteS3ObjectsArgs = {
  input: DeleteS3ObjectInput;
};


export type MutationDeleteWorkOrderArgs = {
  input: RemoveWorkOrderInput;
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationRemoveUserArgs = {
  input: RemoveUserInput;
};


export type MutationUpdateCustomerBusinessNameArgs = {
  input: UpdateCustomerBusinessNameInput;
};


export type MutationUpdateCustomerEmailArgs = {
  input: UpdateCustomerEmailInput;
};


export type MutationUpdateCustomerFirstNameArgs = {
  input: UpdateCustomerFirstNameInput;
};


export type MutationUpdateCustomerLastNameArgs = {
  input: UpdateCustomerLastNameInput;
};


export type MutationUpdateCustomerPhoneArgs = {
  input: UpdateCustomerPhoneInput;
};


export type MutationUpdateCustomerPropertiesArgs = {
  input: UpdateCustomerPropertiesInput;
};


export type MutationUpdateInvoiceChargedArgs = {
  input: UpdateInvoiceChargedInput;
};


export type MutationUpdateInvoiceCustomerIdArgs = {
  input: UpdateInvoiceCustomerIdInput;
};


export type MutationUpdateInvoiceDateArgs = {
  input: UpdateInvoiceDateInput;
};


export type MutationUpdateInvoicePaidArgs = {
  input: UpdateInvoicePaidInput;
};


export type MutationUpdateInvoiceQuoteArgs = {
  input: UpdateInvoiceQuoteInput;
};


export type MutationUpdateInvoiceTotalArgs = {
  input: UpdateInvoiceTotalInput;
};


export type MutationUpdateInvoiceWorkOrdersArgs = {
  input: UpdateInvoiceWorkOrdersInput;
};


export type MutationUpdatePropertyAddressArgs = {
  input: UpdatePropertyAddressInput;
};


export type MutationUpdatePropertyAgentArgs = {
  input: UpdatePropertyAgentInput;
};


export type MutationUpdatePropertyDescriptionArgs = {
  input: UpdatePropertyDescriptionInput;
};


export type MutationUpdatePropertyNameArgs = {
  input: UpdatePropertyNameInput;
};


export type MutationUpdatePropertyS3FolderKeyArgs = {
  input: UpdatePropertyS3FolderKeyInput;
};


export type MutationUpdateUserFirstNameArgs = {
  input: UpdateUserFirstNameInput;
};


export type MutationUpdateUserLastNameArgs = {
  input: UpdateUserLastNameInput;
};


export type MutationUpdateUserPasswordArgs = {
  input: UpdateUserPasswordInput;
};


export type MutationUpdateUserPinArgs = {
  input: UpdateUserPinInput;
};


export type MutationUpdateUserUsernameArgs = {
  input: UpdateUserUsernameInput;
};


export type MutationUpdateWorkOrderChargedArgs = {
  input: UpdateWorkOrderChargedInput;
};


export type MutationUpdateWorkOrderCommentsArgs = {
  input: UpdateWorkOrderCommentsInput;
};


export type MutationUpdateWorkOrderCompletedByArgs = {
  input: UpdateWorkOrderCompletedByInput;
};


export type MutationUpdateWorkOrderCustomerIdArgs = {
  input: UpdateWorkOrderCustomerIdInput;
};


export type MutationUpdateWorkOrderDateArgs = {
  input: UpdateWorkOrderDateInput;
};


export type MutationUpdateWorkOrderDescriptionArgs = {
  input: UpdateWorkOrderDescriptionInput;
};


export type MutationUpdateWorkOrderPaidArgs = {
  input: UpdateWorkOrderPaidInput;
};


export type MutationUpdateWorkOrderPropertyIdArgs = {
  input: UpdateWorkOrderPropertyIdInput;
};


export type MutationUpdateWorkOrderQuoteArgs = {
  input: UpdateWorkOrderQuoteInput;
};


export type MutationUpdateWorkOrderTotalArgs = {
  input: UpdateWorkOrderTotalInput;
};


export type MutationUpdateWorkOrderTypeArgs = {
  input: UpdateWorkOrderTypeInput;
};

export type NewCustomerInput = {
  businessName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type NewInvoiceInput = {
  charged: Scalars['Boolean']['input'];
  customerId: Scalars['ID']['input'];
  date: Scalars['String']['input'];
  invoiceNumber: Scalars['String']['input'];
  paid: Scalars['Boolean']['input'];
  quote?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  workOrders?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type NewPropertyInput = {
  agent: Scalars['ID']['input'];
  propertyAddress: AddressInput;
  propertyDescription: Scalars['String']['input'];
  propertyName: Scalars['String']['input'];
  s3FolderKey?: InputMaybe<Scalars['String']['input']>;
};

export type NewWorkOrderInput = {
  charged: Scalars['Boolean']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  completedBy?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['ID']['input'];
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  paid: Scalars['Boolean']['input'];
  propertyId: Scalars['ID']['input'];
  quote?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  type: Scalars['String']['input'];
};

export type Property = {
  __typename?: 'Property';
  _id: Scalars['ID']['output'];
  agent: Customer;
  propertyAddress: Address;
  propertyDescription: Scalars['String']['output'];
  propertyName: Scalars['String']['output'];
  s3FolderKey: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<User>>;
  getPresignedS3Url: Scalars['String']['output'];
  queryCustomerById: Customer;
  queryCustomers?: Maybe<Array<Customer>>;
  queryInvoiceById: Invoice;
  queryInvoices?: Maybe<Array<Invoice>>;
  queryInvoicesByCustomer?: Maybe<Array<Invoice>>;
  queryInvoicesByWorkOrder?: Maybe<Array<Invoice>>;
  queryProperties?: Maybe<Array<Property>>;
  queryPropertyById: Property;
  queryThumbtackReviews?: Maybe<Array<Review>>;
  queryWorkOrderById: WorkOrder;
  queryWorkOrders?: Maybe<Array<WorkOrder>>;
  queryWorkOrdersByCustomer?: Maybe<Array<WorkOrder>>;
  queryWorkOrdersByProperty?: Maybe<Array<WorkOrder>>;
};


export type QueryGetPresignedS3UrlArgs = {
  altTag: Scalars['String']['input'];
  commandType: Scalars['String']['input'];
  imgKey: Scalars['String']['input'];
};


export type QueryQueryCustomerByIdArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryQueryInvoiceByIdArgs = {
  invoiceId: Scalars['ID']['input'];
};


export type QueryQueryInvoicesByCustomerArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryQueryInvoicesByWorkOrderArgs = {
  workOrderId: Scalars['ID']['input'];
};


export type QueryQueryPropertyByIdArgs = {
  propertyId: Scalars['ID']['input'];
};


export type QueryQueryWorkOrderByIdArgs = {
  workOrderId: Scalars['ID']['input'];
};


export type QueryQueryWorkOrdersByCustomerArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryQueryWorkOrdersByPropertyArgs = {
  propertyId: Scalars['ID']['input'];
};

export type RemoveCustomerInput = {
  customerId: Scalars['ID']['input'];
};

export type RemoveInvoiceInput = {
  invoiceId: Scalars['ID']['input'];
};

export type RemovePropertyInput = {
  propertyId: Scalars['ID']['input'];
};

export type RemoveUserInput = {
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RemoveWorkOrderInput = {
  workOrderId: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  author: ReviewAuthor;
  datePublished: Scalars['String']['output'];
  description: Scalars['String']['output'];
  reviewRating: ReviewRating;
};

export type ReviewAuthor = {
  __typename?: 'ReviewAuthor';
  name: Scalars['String']['output'];
};

export type ReviewRating = {
  __typename?: 'ReviewRating';
  ratingValue: Scalars['Int']['output'];
};

export type UpdateCustomerBusinessNameInput = {
  businessName: Scalars['String']['input'];
  customerId: Scalars['ID']['input'];
};

export type UpdateCustomerEmailInput = {
  customerId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};

export type UpdateCustomerFirstNameInput = {
  customerId: Scalars['ID']['input'];
  firstName: Scalars['String']['input'];
};

export type UpdateCustomerInvoicesInput = {
  customerId: Scalars['ID']['input'];
  invoice?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateCustomerLastNameInput = {
  customerId: Scalars['ID']['input'];
  lastName: Scalars['String']['input'];
};

export type UpdateCustomerPhoneInput = {
  customerId: Scalars['ID']['input'];
  phone: Scalars['String']['input'];
};

export type UpdateCustomerPropertiesInput = {
  customerId: Scalars['ID']['input'];
  property?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateInvoiceChargedInput = {
  charged: Scalars['Boolean']['input'];
  invoiceId: Scalars['ID']['input'];
};

export type UpdateInvoiceCustomerIdInput = {
  customerId: Scalars['ID']['input'];
  invoiceId: Scalars['ID']['input'];
};

export type UpdateInvoiceDateInput = {
  date: Scalars['String']['input'];
  invoiceId: Scalars['ID']['input'];
};

export type UpdateInvoicePaidInput = {
  invoiceId: Scalars['ID']['input'];
  paid: Scalars['Boolean']['input'];
};

export type UpdateInvoiceQuoteInput = {
  invoiceId: Scalars['ID']['input'];
  quote: Scalars['Float']['input'];
};

export type UpdateInvoiceTotalInput = {
  invoiceId: Scalars['ID']['input'];
  total: Scalars['Float']['input'];
};

export type UpdateInvoiceWorkOrdersInput = {
  invoiceId: Scalars['ID']['input'];
  workOrders: Array<Scalars['ID']['input']>;
};

export type UpdatePropertyAddressInput = {
  propertyAddress: AddressInput;
  propertyId: Scalars['ID']['input'];
};

export type UpdatePropertyAgentInput = {
  agent: Scalars['ID']['input'];
  propertyId: Scalars['ID']['input'];
};

export type UpdatePropertyDescriptionInput = {
  propertyDescription: Scalars['String']['input'];
  propertyId: Scalars['ID']['input'];
};

export type UpdatePropertyNameInput = {
  propertyId: Scalars['ID']['input'];
  propertyName: Scalars['String']['input'];
};

export type UpdatePropertyS3FolderKeyInput = {
  propertyId: Scalars['ID']['input'];
  s3FolderKey: Scalars['String']['input'];
};

export type UpdateUserFirstNameInput = {
  firstName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateUserLastNameInput = {
  lastName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateUserPasswordInput = {
  newPassword: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  userPassword: Scalars['String']['input'];
};

export type UpdateUserPinInput = {
  pin: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  userPassword: Scalars['String']['input'];
};

export type UpdateUserUsernameInput = {
  userId: Scalars['ID']['input'];
  username: Scalars['String']['input'];
};

export type UpdateWorkOrderChargedInput = {
  charged: Scalars['Boolean']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderCommentsInput = {
  comments: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderCompletedByInput = {
  completedBy: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderCustomerIdInput = {
  customerId: Scalars['ID']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderDateInput = {
  date: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderDescriptionInput = {
  description: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderInvoicesInput = {
  invoice?: InputMaybe<Scalars['ID']['input']>;
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderPaidInput = {
  paid: Scalars['Boolean']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderPropertyIdInput = {
  propertyId: Scalars['ID']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderQuoteInput = {
  quote: Scalars['Float']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderTotalInput = {
  total: Scalars['Float']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderTypeInput = {
  type: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  pin: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type WorkOrder = {
  __typename?: 'WorkOrder';
  _id: Scalars['ID']['output'];
  charged: Scalars['Boolean']['output'];
  comments: Scalars['String']['output'];
  completedBy: Scalars['String']['output'];
  customerId: Customer;
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  invoices: Array<Maybe<Invoice>>;
  lastUpdated: Scalars['String']['output'];
  paid: Scalars['Boolean']['output'];
  propertyId: Property;
  quote: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  type: Scalars['String']['output'];
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


export type QueryThumbtackReviewsQuery = { __typename?: 'Query', queryThumbtackReviews?: Array<{ __typename?: 'Review', datePublished: string, description: string, author: { __typename?: 'ReviewAuthor', name: string }, reviewRating: { __typename?: 'ReviewRating', ratingValue: number } }> | null };


export const QueryThumbtackReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryThumbtackReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryThumbtackReviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datePublished"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewRating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ratingValue"}}]}}]}}]}}]} as unknown as DocumentNode<QueryThumbtackReviewsQuery, QueryThumbtackReviewsQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Address = {
  __typename?: 'Address';
  _id: Scalars['ID']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  unit: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type AddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  unit: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['ID']['output'];
  user: User;
};

export type CreateCustomerInput = {
  customer: NewCustomerInput;
};

export type CreateInvoiceInput = {
  invoice: NewInvoiceInput;
};

export type CreatePropertyInput = {
  property: NewPropertyInput;
};

export type CreateUserInput = {
  adminCode: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateWorkOrderInput = {
  workOrder: NewWorkOrderInput;
};

export type Customer = {
  __typename?: 'Customer';
  _id: Scalars['ID']['output'];
  businessName: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  invoices: Array<Maybe<Invoice>>;
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  properties: Array<Maybe<Property>>;
  workOrders: Array<Maybe<WorkOrder>>;
};

export type DeleteS3ObjectInput = {
  imgKeys: Array<Scalars['String']['input']>;
};

export type DeleteS3ObjectResponse = {
  __typename?: 'DeleteS3ObjectResponse';
  message: Scalars['String']['output'];
  status: Scalars['Int']['output'];
};

export type Invoice = {
  __typename?: 'Invoice';
  _id: Scalars['ID']['output'];
  charged: Scalars['Boolean']['output'];
  customerId: Customer;
  date: Scalars['String']['output'];
  invoiceNumber: Scalars['String']['output'];
  paid: Scalars['Boolean']['output'];
  quote: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  workOrders: Array<Maybe<WorkOrder>>;
};

export type LoginUserInput = {
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer: Customer;
  createInvoice: Invoice;
  createProperty: Property;
  createUser: Auth;
  createWorkOrder: WorkOrder;
  deleteCustomer: Customer;
  deleteInvoice: Invoice;
  deleteProperty: Property;
  deleteS3Objects: DeleteS3ObjectResponse;
  deleteWorkOrder: WorkOrder;
  loginUser: Auth;
  removeUser: Auth;
  updateCustomerBusinessName: Customer;
  updateCustomerEmail: Customer;
  updateCustomerFirstName: Customer;
  updateCustomerLastName: Customer;
  updateCustomerPhone: Customer;
  updateCustomerProperties: Customer;
  updateInvoiceCharged: Invoice;
  updateInvoiceCustomerId: Invoice;
  updateInvoiceDate: Invoice;
  updateInvoicePaid: Invoice;
  updateInvoiceQuote: Invoice;
  updateInvoiceTotal: Invoice;
  updateInvoiceWorkOrders: Invoice;
  updatePropertyAddress: Property;
  updatePropertyAgent: Property;
  updatePropertyDescription: Property;
  updatePropertyName: Property;
  updatePropertyS3FolderKey: Property;
  updateUserFirstName: Auth;
  updateUserLastName: Auth;
  updateUserPassword: Auth;
  updateUserPin: Auth;
  updateUserUsername: Auth;
  updateWorkOrderCharged: WorkOrder;
  updateWorkOrderComments: WorkOrder;
  updateWorkOrderCompletedBy: WorkOrder;
  updateWorkOrderCustomerId: WorkOrder;
  updateWorkOrderDate: WorkOrder;
  updateWorkOrderDescription: WorkOrder;
  updateWorkOrderPaid: WorkOrder;
  updateWorkOrderPropertyId: WorkOrder;
  updateWorkOrderQuote: WorkOrder;
  updateWorkOrderTotal: WorkOrder;
  updateWorkOrderType: WorkOrder;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateWorkOrderArgs = {
  input: CreateWorkOrderInput;
};


export type MutationDeleteCustomerArgs = {
  input: RemoveCustomerInput;
};


export type MutationDeleteInvoiceArgs = {
  input: RemoveInvoiceInput;
};


export type MutationDeletePropertyArgs = {
  input: RemovePropertyInput;
};


export type MutationDeleteS3ObjectsArgs = {
  input: DeleteS3ObjectInput;
};


export type MutationDeleteWorkOrderArgs = {
  input: RemoveWorkOrderInput;
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationRemoveUserArgs = {
  input: RemoveUserInput;
};


export type MutationUpdateCustomerBusinessNameArgs = {
  input: UpdateCustomerBusinessNameInput;
};


export type MutationUpdateCustomerEmailArgs = {
  input: UpdateCustomerEmailInput;
};


export type MutationUpdateCustomerFirstNameArgs = {
  input: UpdateCustomerFirstNameInput;
};


export type MutationUpdateCustomerLastNameArgs = {
  input: UpdateCustomerLastNameInput;
};


export type MutationUpdateCustomerPhoneArgs = {
  input: UpdateCustomerPhoneInput;
};


export type MutationUpdateCustomerPropertiesArgs = {
  input: UpdateCustomerPropertiesInput;
};


export type MutationUpdateInvoiceChargedArgs = {
  input: UpdateInvoiceChargedInput;
};


export type MutationUpdateInvoiceCustomerIdArgs = {
  input: UpdateInvoiceCustomerIdInput;
};


export type MutationUpdateInvoiceDateArgs = {
  input: UpdateInvoiceDateInput;
};


export type MutationUpdateInvoicePaidArgs = {
  input: UpdateInvoicePaidInput;
};


export type MutationUpdateInvoiceQuoteArgs = {
  input: UpdateInvoiceQuoteInput;
};


export type MutationUpdateInvoiceTotalArgs = {
  input: UpdateInvoiceTotalInput;
};


export type MutationUpdateInvoiceWorkOrdersArgs = {
  input: UpdateInvoiceWorkOrdersInput;
};


export type MutationUpdatePropertyAddressArgs = {
  input: UpdatePropertyAddressInput;
};


export type MutationUpdatePropertyAgentArgs = {
  input: UpdatePropertyAgentInput;
};


export type MutationUpdatePropertyDescriptionArgs = {
  input: UpdatePropertyDescriptionInput;
};


export type MutationUpdatePropertyNameArgs = {
  input: UpdatePropertyNameInput;
};


export type MutationUpdatePropertyS3FolderKeyArgs = {
  input: UpdatePropertyS3FolderKeyInput;
};


export type MutationUpdateUserFirstNameArgs = {
  input: UpdateUserFirstNameInput;
};


export type MutationUpdateUserLastNameArgs = {
  input: UpdateUserLastNameInput;
};


export type MutationUpdateUserPasswordArgs = {
  input: UpdateUserPasswordInput;
};


export type MutationUpdateUserPinArgs = {
  input: UpdateUserPinInput;
};


export type MutationUpdateUserUsernameArgs = {
  input: UpdateUserUsernameInput;
};


export type MutationUpdateWorkOrderChargedArgs = {
  input: UpdateWorkOrderChargedInput;
};


export type MutationUpdateWorkOrderCommentsArgs = {
  input: UpdateWorkOrderCommentsInput;
};


export type MutationUpdateWorkOrderCompletedByArgs = {
  input: UpdateWorkOrderCompletedByInput;
};


export type MutationUpdateWorkOrderCustomerIdArgs = {
  input: UpdateWorkOrderCustomerIdInput;
};


export type MutationUpdateWorkOrderDateArgs = {
  input: UpdateWorkOrderDateInput;
};


export type MutationUpdateWorkOrderDescriptionArgs = {
  input: UpdateWorkOrderDescriptionInput;
};


export type MutationUpdateWorkOrderPaidArgs = {
  input: UpdateWorkOrderPaidInput;
};


export type MutationUpdateWorkOrderPropertyIdArgs = {
  input: UpdateWorkOrderPropertyIdInput;
};


export type MutationUpdateWorkOrderQuoteArgs = {
  input: UpdateWorkOrderQuoteInput;
};


export type MutationUpdateWorkOrderTotalArgs = {
  input: UpdateWorkOrderTotalInput;
};


export type MutationUpdateWorkOrderTypeArgs = {
  input: UpdateWorkOrderTypeInput;
};

export type NewCustomerInput = {
  businessName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type NewInvoiceInput = {
  charged: Scalars['Boolean']['input'];
  customerId: Scalars['ID']['input'];
  date: Scalars['String']['input'];
  invoiceNumber: Scalars['String']['input'];
  paid: Scalars['Boolean']['input'];
  quote?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  workOrders?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type NewPropertyInput = {
  agent: Scalars['ID']['input'];
  propertyAddress: AddressInput;
  propertyDescription: Scalars['String']['input'];
  propertyName: Scalars['String']['input'];
  s3FolderKey?: InputMaybe<Scalars['String']['input']>;
};

export type NewWorkOrderInput = {
  charged: Scalars['Boolean']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  completedBy?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['ID']['input'];
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  paid: Scalars['Boolean']['input'];
  propertyId: Scalars['ID']['input'];
  quote?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  type: Scalars['String']['input'];
};

export type Property = {
  __typename?: 'Property';
  _id: Scalars['ID']['output'];
  agent: Customer;
  propertyAddress: Address;
  propertyDescription: Scalars['String']['output'];
  propertyName: Scalars['String']['output'];
  s3FolderKey: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<User>>;
  getPresignedS3Url: Scalars['String']['output'];
  queryCustomerById: Customer;
  queryCustomers?: Maybe<Array<Customer>>;
  queryInvoiceById: Invoice;
  queryInvoices?: Maybe<Array<Invoice>>;
  queryInvoicesByCustomer?: Maybe<Array<Invoice>>;
  queryInvoicesByWorkOrder?: Maybe<Array<Invoice>>;
  queryProperties?: Maybe<Array<Property>>;
  queryPropertyById: Property;
  queryThumbtackReviews?: Maybe<Array<Review>>;
  queryWorkOrderById: WorkOrder;
  queryWorkOrders?: Maybe<Array<WorkOrder>>;
  queryWorkOrdersByCustomer?: Maybe<Array<WorkOrder>>;
  queryWorkOrdersByProperty?: Maybe<Array<WorkOrder>>;
};


export type QueryGetPresignedS3UrlArgs = {
  altTag: Scalars['String']['input'];
  commandType: Scalars['String']['input'];
  imgKey: Scalars['String']['input'];
};


export type QueryQueryCustomerByIdArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryQueryInvoiceByIdArgs = {
  invoiceId: Scalars['ID']['input'];
};


export type QueryQueryInvoicesByCustomerArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryQueryInvoicesByWorkOrderArgs = {
  workOrderId: Scalars['ID']['input'];
};


export type QueryQueryPropertyByIdArgs = {
  propertyId: Scalars['ID']['input'];
};


export type QueryQueryWorkOrderByIdArgs = {
  workOrderId: Scalars['ID']['input'];
};


export type QueryQueryWorkOrdersByCustomerArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryQueryWorkOrdersByPropertyArgs = {
  propertyId: Scalars['ID']['input'];
};

export type RemoveCustomerInput = {
  customerId: Scalars['ID']['input'];
};

export type RemoveInvoiceInput = {
  invoiceId: Scalars['ID']['input'];
};

export type RemovePropertyInput = {
  propertyId: Scalars['ID']['input'];
};

export type RemoveUserInput = {
  userPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RemoveWorkOrderInput = {
  workOrderId: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  author: ReviewAuthor;
  datePublished: Scalars['String']['output'];
  description: Scalars['String']['output'];
  reviewRating: ReviewRating;
};

export type ReviewAuthor = {
  __typename?: 'ReviewAuthor';
  name: Scalars['String']['output'];
};

export type ReviewRating = {
  __typename?: 'ReviewRating';
  ratingValue: Scalars['Int']['output'];
};

export type UpdateCustomerBusinessNameInput = {
  businessName: Scalars['String']['input'];
  customerId: Scalars['ID']['input'];
};

export type UpdateCustomerEmailInput = {
  customerId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};

export type UpdateCustomerFirstNameInput = {
  customerId: Scalars['ID']['input'];
  firstName: Scalars['String']['input'];
};

export type UpdateCustomerInvoicesInput = {
  customerId: Scalars['ID']['input'];
  invoice?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateCustomerLastNameInput = {
  customerId: Scalars['ID']['input'];
  lastName: Scalars['String']['input'];
};

export type UpdateCustomerPhoneInput = {
  customerId: Scalars['ID']['input'];
  phone: Scalars['String']['input'];
};

export type UpdateCustomerPropertiesInput = {
  customerId: Scalars['ID']['input'];
  property?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateInvoiceChargedInput = {
  charged: Scalars['Boolean']['input'];
  invoiceId: Scalars['ID']['input'];
};

export type UpdateInvoiceCustomerIdInput = {
  customerId: Scalars['ID']['input'];
  invoiceId: Scalars['ID']['input'];
};

export type UpdateInvoiceDateInput = {
  date: Scalars['String']['input'];
  invoiceId: Scalars['ID']['input'];
};

export type UpdateInvoicePaidInput = {
  invoiceId: Scalars['ID']['input'];
  paid: Scalars['Boolean']['input'];
};

export type UpdateInvoiceQuoteInput = {
  invoiceId: Scalars['ID']['input'];
  quote: Scalars['Float']['input'];
};

export type UpdateInvoiceTotalInput = {
  invoiceId: Scalars['ID']['input'];
  total: Scalars['Float']['input'];
};

export type UpdateInvoiceWorkOrdersInput = {
  invoiceId: Scalars['ID']['input'];
  workOrders: Array<Scalars['ID']['input']>;
};

export type UpdatePropertyAddressInput = {
  propertyAddress: AddressInput;
  propertyId: Scalars['ID']['input'];
};

export type UpdatePropertyAgentInput = {
  agent: Scalars['ID']['input'];
  propertyId: Scalars['ID']['input'];
};

export type UpdatePropertyDescriptionInput = {
  propertyDescription: Scalars['String']['input'];
  propertyId: Scalars['ID']['input'];
};

export type UpdatePropertyNameInput = {
  propertyId: Scalars['ID']['input'];
  propertyName: Scalars['String']['input'];
};

export type UpdatePropertyS3FolderKeyInput = {
  propertyId: Scalars['ID']['input'];
  s3FolderKey: Scalars['String']['input'];
};

export type UpdateUserFirstNameInput = {
  firstName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateUserLastNameInput = {
  lastName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateUserPasswordInput = {
  newPassword: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  userPassword: Scalars['String']['input'];
};

export type UpdateUserPinInput = {
  pin: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  userPassword: Scalars['String']['input'];
};

export type UpdateUserUsernameInput = {
  userId: Scalars['ID']['input'];
  username: Scalars['String']['input'];
};

export type UpdateWorkOrderChargedInput = {
  charged: Scalars['Boolean']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderCommentsInput = {
  comments: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderCompletedByInput = {
  completedBy: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderCustomerIdInput = {
  customerId: Scalars['ID']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderDateInput = {
  date: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderDescriptionInput = {
  description: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderInvoicesInput = {
  invoice?: InputMaybe<Scalars['ID']['input']>;
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderPaidInput = {
  paid: Scalars['Boolean']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderPropertyIdInput = {
  propertyId: Scalars['ID']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderQuoteInput = {
  quote: Scalars['Float']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderTotalInput = {
  total: Scalars['Float']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type UpdateWorkOrderTypeInput = {
  type: Scalars['String']['input'];
  workOrderId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  pin: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type WorkOrder = {
  __typename?: 'WorkOrder';
  _id: Scalars['ID']['output'];
  charged: Scalars['Boolean']['output'];
  comments: Scalars['String']['output'];
  completedBy: Scalars['String']['output'];
  customerId: Customer;
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  invoices: Array<Maybe<Invoice>>;
  lastUpdated: Scalars['String']['output'];
  paid: Scalars['Boolean']['output'];
  propertyId: Property;
  quote: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  type: Scalars['String']['output'];
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


export type QueryThumbtackReviewsQuery = { __typename?: 'Query', queryThumbtackReviews?: Array<{ __typename?: 'Review', datePublished: string, description: string, author: { __typename?: 'ReviewAuthor', name: string }, reviewRating: { __typename?: 'ReviewRating', ratingValue: number } }> | null };
