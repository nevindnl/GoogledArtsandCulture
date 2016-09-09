import {ImagesActions, receiveImages, receiveCurrentImage, receiveFavorite, receiveSearchedImages, addSearchedImages} from '../actions/images_actions';
import {createCollection} from '../actions/collections_actions';
import * as ImagesAPI from '../util/images_api_util';

const ImagesMiddleware = ({getState, dispatch}) => next => action => {
  let success = images => dispatch(receiveImages(images));

  switch(action.type){
    case ImagesActions.REQUEST_IMAGES:
      ImagesAPI.requestImages(success);
      return next(action);
    case ImagesActions.REQUEST_FAVORITE_IMAGES:
      ImagesAPI.requestFavoriteImages(success);
      return next(action);
    case ImagesActions.REQUEST_COLLECTION:
      ImagesAPI.requestCollection(action.id, success);
      return next(action);
    case ImagesActions.REQUEST_CURRENT_IMAGE:
      success = image => dispatch(receiveCurrentImage(image));
      ImagesAPI.requestCurrentImage(action.id, success);
      return next(action);
    case ImagesActions.CREATE_IMAGE:
      success = image => dispatch(receiveCurrentImage(image));
      ImagesAPI.createImage(action.image, success);
      return next(action);
    case ImagesActions.TOGGLE_FAVORITE:
      success = () => dispatch(receiveFavorite());
      ImagesAPI.toggleFavorite(action.id, success);
      return next(action);
    case ImagesActions.SEARCH_IMAGES:
      success = data => dispatch(receiveSearchedImages(data));
      ImagesAPI.searchImages(action.word, action.offset, success);
      return next(action);
    case ImagesActions.SEARCH_MORE_IMAGES:
      success = data => dispatch(addSearchedImages(data));
      ImagesAPI.searchImages(action.word, action.offset, success);
      return next(action);
    case ImagesActions.CREATE_SEARCH_COLLECTION:
      success = collectedImages => dispatch(createCollection({collection: {title: action.title, description: ''}},{collectedImages}));
      ImagesAPI.createSearchCollection(action.images, success);
      return next(action);
    default:
      return next(action);
  }
};

export default ImagesMiddleware;
