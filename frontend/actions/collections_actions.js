export const CollectionsActions = {
  REQUEST_COLLECTIONS: 'REQUEST_COLLECTIONS',
  REQUEST_FAVORITE_COLLECTIONS: 'REQUEST_FAVORITE_COLLECTIONS',
  RECEIVE_COLLECTIONS: 'RECEIVE_COLLECTIONS',
  CREATE_COLLECTION: 'CREATE_COLLECTION',
  RECEIVE_COLLECTION: 'RECEIVE_COLLECTION',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
};

export const requestCollections = () => ({
  type: CollectionsActions.REQUEST_COLLECTIONS,
});

export const requestFavoriteCollections = () => ({
  type: CollectionsActions.REQUEST_FAVORITE_COLLECTIONS,
});

export const receiveCollections = collections => ({
  type: CollectionsActions.RECEIVE_COLLECTIONS,
  collections
});

export const createCollection = (collection, collectedImages) => ({
  type: CollectionsActions.CREATE_COLLECTION,
  collection,
  collectedImages
});

export const receiveCollection = collection => ({
  type: CollectionsActions.RECEIVE_COLLECTION,
  collection
});

export const receiveErrors = errors => ({
  type: CollectionsActions.RECEIVE_ERRORS,
  errors
});
