import {CollectionsActions, receiveCollections} from '../actions/collections_actions';
import * as CollectionsAPI from '../util/collections_api_util';

const CollectionsMiddleware = ({getState, dispatch}) => next => action => {
  let success = collections => dispatch(receiveCollections(collections));
  let errors = data => dispatch(receiveCollections(data));

  switch(action.type){
    case CollectionsActions.REQUEST_COLLECTIONS:
      CollectionsAPI.requestCollections(success);
      return next(action);
    default:
      return next(action);
  }
};

export default CollectionsMiddleware;
