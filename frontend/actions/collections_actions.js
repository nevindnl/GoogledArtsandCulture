export const CollectionsActions = {
  REQUEST_COLLECTIONS: 'REQUEST_COLLECTIONS',
  REQUEST_FAVORITE_COLLECTIONS: 'REQUEST_FAVORITE_COLLECTIONS',
  RECEIVE_COLLECTIONS: 'RECEIVE_COLLECTIONS',
  REQUEST_CURRENT_COLLECTION: 'REQUEST_CURRENT_COLLECTION',
  RECEIVE_CURRENT_COLLECTION: 'RECEIVE_CURRENT_COLLECTION',
  CREATE_COLLECTION: 'CREATE_COLLECTION',
  UPDATE_COLLECTION: 'UPDATE_COLLECTION',
  RECEIVE_COLLECTION: 'RECEIVE_COLLECTION',
  DELETE_COLLECTION: 'DELETE_COLLECTION',
  RECEIVE_COLLECTION_ERRORS: 'RECEIVE_COLLECTION_ERRORS',
  SEARCH_COLLECTIONS: 'SEARCH_COLLECTIONS',
  RECEIVE_SEARCHED_COLLECTIONS: 'RECEIVE_SEARCHED_COLLECTIONS'
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

export const requestCurrentCollection = id => ({
  type: CollectionsActions.REQUEST_CURRENT_COLLECTION,
  id
});

export const receiveCurrentCollection = collection => ({
  type: CollectionsActions.RECEIVE_CURRENT_COLLECTION,
  collection
});

export const createCollection = (collection, collectedImages) => ({
  type: CollectionsActions.CREATE_COLLECTION,
  collection,
  collectedImages
});

export const updateCollection = (collection, collectedImages) => ({
  type: CollectionsActions.UPDATE_COLLECTION,
  collection,
  collectedImages
});

export const receiveCollection = collection => ({
  type: CollectionsActions.RECEIVE_COLLECTION,
  collection
});

export const deleteCollection = id => ({
  type: CollectionsActions.DELETE_COLLECTION,
  id
});

export const receiveCollectionErrors = errors => ({
  type: CollectionsActions.RECEIVE_COLLECTION_ERRORS,
  errors
});

// export const searchCollections = word => ({
//   type: CollectionsActions.SEARCH_COLLECTIONS,
//   word
// });
//
// export const receiveSearchedCollections = data => ({
//   type: CollectionsActions.RECEIVE_SEARCHED_COLLECTIONS,
//   data
// });
