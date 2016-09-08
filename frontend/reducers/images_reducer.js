import {ImagesActions} from '../actions/images_actions';
import {merge} from 'lodash';

const ImagesReducer = (state = {images: [], currentImage: {id: 0, title: '', description: '', url: '', favorited: false}}, action) => {
  const newState = merge({}, state);

  switch(action.type){
    case ImagesActions.RECEIVE_IMAGES:
      newState.images = action.images;
      return newState;
    case ImagesActions.RECEIVE_CURRENT_IMAGE:
      newState.currentImage = action.image;
      return newState;
    case ImagesActions.RECEIVE_FAVORITE:
      newState.currentImage.favorited = !newState.currentImage.favorited;
      return newState;
    case ImagesActions.RECEIVE_SEARCHED_IMAGES:
      debugger;
      return newState;
    default:
      return state;
  }
};

export default ImagesReducer;
