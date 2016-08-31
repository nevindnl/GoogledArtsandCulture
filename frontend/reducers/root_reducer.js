import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ImagesReducer from './images_reducer';
import CollectionsReducer from './collections_reducer';

const RootReducer = combineReducers({
  images: ImagesReducer,
  session: SessionReducer,
  collections: CollectionsReducer
});

export default RootReducer;
