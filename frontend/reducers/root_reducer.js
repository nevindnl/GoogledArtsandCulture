import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ImagesReducer from './images_reducer';

const RootReducer = combineReducers({
  images: ImagesReducer,
  session: SessionReducer
});

export default RootReducer;
