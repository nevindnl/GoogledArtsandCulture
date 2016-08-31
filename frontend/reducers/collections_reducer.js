import {CollectionsActions} from '../actions/collections_actions';
import {merge} from 'lodash';

const CollectionsReducer = (state = [], action) => {
  switch(action.type){
    case CollectionsActions.RECEIVE_COLLECTIONS:
      return action.collections;
    default:
      return state;
  }
};

export default CollectionsReducer;
