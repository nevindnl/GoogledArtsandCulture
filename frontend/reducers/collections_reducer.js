import {CollectionsActions} from '../actions/collections_actions';
import {merge} from 'lodash';

const CollectionsReducer = (state = {collections: [], errors: []}, action) => {
  const newState = merge({}, state);

  switch(action.type){
    case CollectionsActions.RECEIVE_COLLECTIONS:
      newState.collections = action.collections;
      return newState;
    case CollectionsActions.RECEIVE_COLLECTION:
      newState.collections.push(action.collection);
      return newState;
    case CollectionsActions.RECEIVE_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    default:
      return state;
  }
};

export default CollectionsReducer;
