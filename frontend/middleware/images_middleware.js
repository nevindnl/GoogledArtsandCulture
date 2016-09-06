import {ImagesActions, receiveImages} from '../actions/images_actions';
import * as ImagesAPI from '../util/images_api_util';

const ImagesMiddleware = ({getState, dispatch}) => next => action => {
  let success = images => dispatch(receiveImages(images));
  let errors = data => dispatch(receiveImages(data));

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
    default:
      return next(action);
  }
};

export default ImagesMiddleware;
