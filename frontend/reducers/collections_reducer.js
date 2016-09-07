import {CollectionsActions} from '../actions/collections_actions';
import {merge} from 'lodash';

const CollectionsReducer = (state = {collections: [], errors: [], currentCollection: {id: 0, title: '', description: ''}}, action) => {
  const newState = merge({}, state);

  switch(action.type){
    case CollectionsActions.RECEIVE_COLLECTIONS:
      newState.collections = action.collections;
      return newState;
    case CollectionsActions.RECEIVE_COLLECTION:
      newState.collections.push(action.collection);
      newState.errors = [];
      return newState;
    case CollectionsActions.RECEIVE_CURRENT_COLLECTION:
      newState.currentCollection = action.collection;
      newState.errors = [];
      return newState;
    case CollectionsActions.RECEIVE_COLLECTION_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    default:
      return state;
  }
};

export default CollectionsReducer;
