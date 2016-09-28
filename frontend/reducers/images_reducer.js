import {ImagesActions} from '../actions/images_actions';
import {merge} from 'lodash';

const ImagesReducer = (state = {images: [], currentImage: {id: 0, title: '', description: '', thumbUrl: '', url: '', favorited: false}}, action) => {
  const newState = merge({}, state);

  switch(action.type){
    case ImagesActions.RECEIVE_IMAGES:
      newState.images = action.images;
      return newState;
    case ImagesActions.CLEAR_IMAGES:
      newState.images = [];
      return newState;
    case ImagesActions.RECEIVE_CURRENT_IMAGE:
      newState.currentImage = action.image;
      return newState;
    case ImagesActions.RECEIVE_FAVORITE:
      newState.currentImage.favorited = !newState.currentImage.favorited;
      return newState;
    case ImagesActions.RECEIVE_SEARCHED_IMAGES:
      newState.images = action.data.value.map(item => ({
        id: Math.random().toString(36).substring(8),
        title: item.name,
        description: item.hostPageDisplayUrl.replace(/<b>/g, '').replace(/<\/b>/g, ''),
        thumbUrl: item.thumbnailUrl,
        url: 'http://' + item.contentUrl.match(/^.*3a%2f%2f(.*)\&p.*/)[1].replace(/%2f/g, '/').replace(/%25/g, '%'),
        favorited: false
      }));
      return newState;
    case ImagesActions.ADD_SEARCHED_IMAGES:
      newState.images = newState.images.concat(action.data.value.map(item => ({
        id: Math.random().toString(36).substring(8),
        title: item.name,
        description: item.hostPageDisplayUrl.replace(/<b>/g, '').replace(/<\/b>/g, ''),
        thumbUrl: item.thumbnailUrl,
        url: 'http://' + item.contentUrl.match(/^.*3a%2f%2f(.*)\&p.*/)[1].replace(/%2f/g, '/').replace(/%25/g, '%'),
        favorited: false
      })));
      return newState;
    default:
      return state;
  }
};

export default ImagesReducer;
