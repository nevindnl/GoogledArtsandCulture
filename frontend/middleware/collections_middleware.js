import {CollectionsActions, receiveCollections, receiveCollection, receiveCurrentCollection, receiveErrors} from '../actions/collections_actions';
import {requestCollection} from '../actions/images_actions';
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
    case CollectionsActions.REQUEST_CURRENT_COLLECTION:
      success = collection => dispatch(receiveCurrentCollection(collection));
      CollectionsAPI.requestCurrentCollection(action.id, success);
      return next(action);
    case CollectionsActions.CREATE_COLLECTION:
      success = (collection => dispatch(receiveCollection(collection)));
      CollectionsAPI.createCollection(action.collection, action.collectedImages, success, errors);
      return next(action);
    case CollectionsActions.UPDATE_COLLECTION:
      success = collection => {
        dispatch(receiveCurrentCollection(collection));
        dispatch(requestCollection(collection.id));
      };
      CollectionsAPI.updateCollection(action.collection, action.collectedImages, success, errors);
      return next(action);
    case CollectionsActions.DELETE_COLLECTION:
      success = () => next(action);
      CollectionsAPI.deleteCollection(action.id, success, errors);
      break;
    default:
      return next(action);
  }
};

export default CollectionsMiddleware;
