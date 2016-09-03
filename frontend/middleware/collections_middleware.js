import {CollectionsActions, receiveCollections, receiveCollection, receiveErrors} from '../actions/collections_actions';
import * as CollectionsAPI from '../util/collections_api_util';

const CollectionsMiddleware = ({getState, dispatch}) => next => action => {
  let success = collections => dispatch(receiveCollections(collections));
  let errors = data => dispatch(receiveErrors(data));

  switch(action.type){
    case CollectionsActions.REQUEST_COLLECTIONS:
      CollectionsAPI.requestCollections(success);
      return next(action);
    case CollectionsActions.REQUEST_FAVORITE_COLLECTIONS:
      CollectionsAPI.requestFavoriteCollections(success);
      return next(action);
    case CollectionsActions.CREATE_COLLECTION:
      success = collection => dispatch(receiveCollection(collection));
      CollectionsAPI.createCollection(action.collection, action.collectedImages, success, errors);
      return next(action);
    default:
      return next(action);
  }
};

export default CollectionsMiddleware;
