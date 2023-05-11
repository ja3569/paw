/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCat = /* GraphQL */ `
  subscription OnCreateCat(
    $filter: ModelSubscriptionCatFilterInput
    $owner: String
  ) {
    onCreateCat(filter: $filter, owner: $owner) {
      id
      name
      color
      age
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCat = /* GraphQL */ `
  subscription OnUpdateCat(
    $filter: ModelSubscriptionCatFilterInput
    $owner: String
  ) {
    onUpdateCat(filter: $filter, owner: $owner) {
      id
      name
      color
      age
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCat = /* GraphQL */ `
  subscription OnDeleteCat(
    $filter: ModelSubscriptionCatFilterInput
    $owner: String
  ) {
    onDeleteCat(filter: $filter, owner: $owner) {
      id
      name
      color
      age
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onCreateMessage(filter: $filter, owner: $owner) {
      id
      userID
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onUpdateMessage(filter: $filter, owner: $owner) {
      id
      userID
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onDeleteMessage(filter: $filter, owner: $owner) {
      id
      userID
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onCreateReview(filter: $filter, owner: $owner) {
      id
      catId
      rating
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onUpdateReview(filter: $filter, owner: $owner) {
      id
      catId
      rating
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onDeleteReview(filter: $filter, owner: $owner) {
      id
      catId
      rating
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
