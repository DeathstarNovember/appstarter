import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone. */
  Datetime: any;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form. */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `SequelizeMeta`. */
  allSequelizeMetas?: Maybe<SequelizeMetasConnection>;
  /** Reads and enables pagination through a set of `Tally`. */
  allTallies?: Maybe<TalliesConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  sequelizeMetaByName?: Maybe<SequelizeMeta>;
  tallyById?: Maybe<Tally>;
  userById?: Maybe<User>;
  /** Reads a single `SequelizeMeta` using its globally unique `ID`. */
  sequelizeMeta?: Maybe<SequelizeMeta>;
  /** Reads a single `Tally` using its globally unique `ID`. */
  tally?: Maybe<Tally>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSequelizeMetasArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SequelizeMetasOrderBy>>;
  condition?: Maybe<SequelizeMetaCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTalliesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TalliesOrderBy>>;
  condition?: Maybe<TallyCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UsersOrderBy>>;
  condition?: Maybe<UserCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySequelizeMetaByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTallyByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySequelizeMetaArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTallyArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID'];
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


/** Methods to use when ordering `SequelizeMeta`. */
export enum SequelizeMetasOrderBy {
  Natural = 'NATURAL',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `SequelizeMeta` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SequelizeMetaCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
};

/** A connection to a list of `SequelizeMeta` values. */
export type SequelizeMetasConnection = {
  __typename?: 'SequelizeMetasConnection';
  /** A list of `SequelizeMeta` objects. */
  nodes: Array<Maybe<SequelizeMeta>>;
  /** A list of edges which contains the `SequelizeMeta` and cursor to aid in pagination. */
  edges: Array<SequelizeMetasEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SequelizeMeta` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type SequelizeMeta = Node & {
  __typename?: 'SequelizeMeta';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  name: Scalars['String'];
};

/** A `SequelizeMeta` edge in the connection. */
export type SequelizeMetasEdge = {
  __typename?: 'SequelizeMetasEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SequelizeMeta` at the end of the edge. */
  node?: Maybe<SequelizeMeta>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** Methods to use when ordering `Tally`. */
export enum TalliesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  NoteAsc = 'NOTE_ASC',
  NoteDesc = 'NOTE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Tally` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TallyCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `category` field. */
  category?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `note` field. */
  note?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};


/** A connection to a list of `Tally` values. */
export type TalliesConnection = {
  __typename?: 'TalliesConnection';
  /** A list of `Tally` objects. */
  nodes: Array<Maybe<Tally>>;
  /** A list of edges which contains the `Tally` and cursor to aid in pagination. */
  edges: Array<TalliesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tally` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Tally = Node & {
  __typename?: 'Tally';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  value: Scalars['Int'];
  category?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
};

/** A `Tally` edge in the connection. */
export type TalliesEdge = {
  __typename?: 'TalliesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Tally` at the end of the edge. */
  node?: Maybe<Tally>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type User = Node & {
  __typename?: 'User';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `SequelizeMeta`. */
  createSequelizeMeta?: Maybe<CreateSequelizeMetaPayload>;
  /** Creates a single `Tally`. */
  createTally?: Maybe<CreateTallyPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Updates a single `SequelizeMeta` using its globally unique id and a patch. */
  updateSequelizeMeta?: Maybe<UpdateSequelizeMetaPayload>;
  /** Updates a single `SequelizeMeta` using a unique key and a patch. */
  updateSequelizeMetaByName?: Maybe<UpdateSequelizeMetaPayload>;
  /** Updates a single `Tally` using its globally unique id and a patch. */
  updateTally?: Maybe<UpdateTallyPayload>;
  /** Updates a single `Tally` using a unique key and a patch. */
  updateTallyById?: Maybe<UpdateTallyPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
  /** Deletes a single `SequelizeMeta` using its globally unique id. */
  deleteSequelizeMeta?: Maybe<DeleteSequelizeMetaPayload>;
  /** Deletes a single `SequelizeMeta` using a unique key. */
  deleteSequelizeMetaByName?: Maybe<DeleteSequelizeMetaPayload>;
  /** Deletes a single `Tally` using its globally unique id. */
  deleteTally?: Maybe<DeleteTallyPayload>;
  /** Deletes a single `Tally` using a unique key. */
  deleteTallyById?: Maybe<DeleteTallyPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSequelizeMetaArgs = {
  input: CreateSequelizeMetaInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTallyArgs = {
  input: CreateTallyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSequelizeMetaArgs = {
  input: UpdateSequelizeMetaInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSequelizeMetaByNameArgs = {
  input: UpdateSequelizeMetaByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTallyArgs = {
  input: UpdateTallyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTallyByIdArgs = {
  input: UpdateTallyByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSequelizeMetaArgs = {
  input: DeleteSequelizeMetaInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSequelizeMetaByNameArgs = {
  input: DeleteSequelizeMetaByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTallyArgs = {
  input: DeleteTallyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTallyByIdArgs = {
  input: DeleteTallyByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};

/** All input for the create `SequelizeMeta` mutation. */
export type CreateSequelizeMetaInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SequelizeMeta` to be created by this mutation. */
  sequelizeMeta: SequelizeMetaInput;
};

/** An input for mutations affecting `SequelizeMeta` */
export type SequelizeMetaInput = {
  name: Scalars['String'];
};

/** The output of our create `SequelizeMeta` mutation. */
export type CreateSequelizeMetaPayload = {
  __typename?: 'CreateSequelizeMetaPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SequelizeMeta` that was created by this mutation. */
  sequelizeMeta?: Maybe<SequelizeMeta>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `SequelizeMeta`. May be used by Relay 1. */
  sequelizeMetaEdge?: Maybe<SequelizeMetasEdge>;
};


/** The output of our create `SequelizeMeta` mutation. */
export type CreateSequelizeMetaPayloadSequelizeMetaEdgeArgs = {
  orderBy?: Maybe<Array<SequelizeMetasOrderBy>>;
};

/** All input for the create `Tally` mutation. */
export type CreateTallyInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tally` to be created by this mutation. */
  tally: TallyInput;
};

/** An input for mutations affecting `Tally` */
export type TallyInput = {
  id?: Maybe<Scalars['Int']>;
  value: Scalars['Int'];
  category?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
};

/** The output of our create `Tally` mutation. */
export type CreateTallyPayload = {
  __typename?: 'CreateTallyPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tally` that was created by this mutation. */
  tally?: Maybe<Tally>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Tally`. May be used by Relay 1. */
  tallyEdge?: Maybe<TalliesEdge>;
};


/** The output of our create `Tally` mutation. */
export type CreateTallyPayloadTallyEdgeArgs = {
  orderBy?: Maybe<Array<TalliesOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

/** All input for the `updateSequelizeMeta` mutation. */
export type UpdateSequelizeMetaInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SequelizeMeta` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SequelizeMeta` being updated. */
  sequelizeMetaPatch: SequelizeMetaPatch;
};

/** Represents an update to a `SequelizeMeta`. Fields that are set will be updated. */
export type SequelizeMetaPatch = {
  name?: Maybe<Scalars['String']>;
};

/** The output of our update `SequelizeMeta` mutation. */
export type UpdateSequelizeMetaPayload = {
  __typename?: 'UpdateSequelizeMetaPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SequelizeMeta` that was updated by this mutation. */
  sequelizeMeta?: Maybe<SequelizeMeta>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `SequelizeMeta`. May be used by Relay 1. */
  sequelizeMetaEdge?: Maybe<SequelizeMetasEdge>;
};


/** The output of our update `SequelizeMeta` mutation. */
export type UpdateSequelizeMetaPayloadSequelizeMetaEdgeArgs = {
  orderBy?: Maybe<Array<SequelizeMetasOrderBy>>;
};

/** All input for the `updateSequelizeMetaByName` mutation. */
export type UpdateSequelizeMetaByNameInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `SequelizeMeta` being updated. */
  sequelizeMetaPatch: SequelizeMetaPatch;
  name: Scalars['String'];
};

/** All input for the `updateTally` mutation. */
export type UpdateTallyInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tally` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Tally` being updated. */
  tallyPatch: TallyPatch;
};

/** Represents an update to a `Tally`. Fields that are set will be updated. */
export type TallyPatch = {
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** The output of our update `Tally` mutation. */
export type UpdateTallyPayload = {
  __typename?: 'UpdateTallyPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tally` that was updated by this mutation. */
  tally?: Maybe<Tally>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Tally`. May be used by Relay 1. */
  tallyEdge?: Maybe<TalliesEdge>;
};


/** The output of our update `Tally` mutation. */
export type UpdateTallyPayloadTallyEdgeArgs = {
  orderBy?: Maybe<Array<TalliesOrderBy>>;
};

/** All input for the `updateTallyById` mutation. */
export type UpdateTallyByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Tally` being updated. */
  tallyPatch: TallyPatch;
  id: Scalars['Int'];
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
  id: Scalars['Int'];
};

/** All input for the `deleteSequelizeMeta` mutation. */
export type DeleteSequelizeMetaInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SequelizeMeta` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `SequelizeMeta` mutation. */
export type DeleteSequelizeMetaPayload = {
  __typename?: 'DeleteSequelizeMetaPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SequelizeMeta` that was deleted by this mutation. */
  sequelizeMeta?: Maybe<SequelizeMeta>;
  deletedSequelizeMetaId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `SequelizeMeta`. May be used by Relay 1. */
  sequelizeMetaEdge?: Maybe<SequelizeMetasEdge>;
};


/** The output of our delete `SequelizeMeta` mutation. */
export type DeleteSequelizeMetaPayloadSequelizeMetaEdgeArgs = {
  orderBy?: Maybe<Array<SequelizeMetasOrderBy>>;
};

/** All input for the `deleteSequelizeMetaByName` mutation. */
export type DeleteSequelizeMetaByNameInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deleteTally` mutation. */
export type DeleteTallyInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tally` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Tally` mutation. */
export type DeleteTallyPayload = {
  __typename?: 'DeleteTallyPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tally` that was deleted by this mutation. */
  tally?: Maybe<Tally>;
  deletedTallyId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Tally`. May be used by Relay 1. */
  tallyEdge?: Maybe<TalliesEdge>;
};


/** The output of our delete `Tally` mutation. */
export type DeleteTallyPayloadTallyEdgeArgs = {
  orderBy?: Maybe<Array<TalliesOrderBy>>;
};

/** All input for the `deleteTallyById` mutation. */
export type DeleteTallyByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type CurrentUserQueryVariables = Exact<{
  id: Scalars['Int'];
  condition?: Maybe<TallyCondition>;
}>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { userById?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'username'>
  )>, allTallies?: Maybe<(
    { __typename?: 'TalliesConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Tally' }
      & Pick<Tally, 'id' | 'nodeId' | 'value' | 'category' | 'note' | 'userId'>
    )>> }
  )> }
);


export const CurrentUserDocument = gql`
    query CurrentUser($id: Int!, $condition: TallyCondition) {
  userById(id: $id) {
    id
    firstName
    lastName
    username
  }
  allTallies(condition: $condition) {
    nodes {
      id
      nodeId
      value
      category
      note
      userId
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;