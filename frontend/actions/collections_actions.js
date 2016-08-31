export const CollectionsActions = {
  REQUEST_COLLECTIONS: 'REQUEST_COLLECTIONS',
  RECEIVE_COLLECTIONS: 'RECEIVE_COLLECTIONS',
};

export const requestCollections = () => ({
  type: CollectionsActions.REQUEST_COLLECTIONS,
});

export const receiveCollections = collections => ({
  type: CollectionsActions.RECEIVE_COLLECTIONS,
  collections
});
