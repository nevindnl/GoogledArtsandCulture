export const ImagesActions = {
  REQUEST_IMAGES: 'REQUEST_IMAGES',
  REQUEST_FAVORITE_IMAGES: 'REQUEST_FAVORITE_IMAGES',
  REQUEST_COLLECTION: 'REQUEST_COLLECTION',
  REQUEST_CURRENT_IMAGE: 'REQUEST_CURRENT_IMAGE',
  RECEIVE_CURRENT_IMAGE: 'RECEIVE_CURRENT_IMAGE',
  RECEIVE_IMAGES: 'RECEIVE_IMAGES',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  RECEIVE_FAVORITE: 'RECEIVE_FAVORITE',
  SEARCH_IMAGES: 'SEARCH_IMAGES',
  RECEIVE_SEARCHED_IMAGES: 'RECEIVE_SEARCHED_IMAGES',
  CREATE_IMAGE: 'CREATE_IMAGE',
  SEARCH_MORE_IMAGES: 'SEARCH_MORE_IMAGES',
  ADD_SEARCHED_IMAGES: 'ADD_SEARCHED_IMAGES',
  CREATE_SEARCH_COLLECTION: 'CREATE_SEARCH_COLLECTION'
};

export const requestImages = () => ({
  type: ImagesActions.REQUEST_IMAGES,
});

export const requestFavoriteImages = () => ({
  type: ImagesActions.REQUEST_FAVORITE_IMAGES,
});

export const requestCollection = id => ({
  type: ImagesActions.REQUEST_COLLECTION,
  id
});

export const requestCurrentImage = id => ({
  type: ImagesActions.REQUEST_CURRENT_IMAGE,
  id
});

export const receiveCurrentImage = image => ({
  type: ImagesActions.RECEIVE_CURRENT_IMAGE,
  image
});

export const receiveImages = images => ({
  type: ImagesActions.RECEIVE_IMAGES,
  images
});

export const toggleFavorite = id => ({
  type: ImagesActions.TOGGLE_FAVORITE,
  id
});

export const receiveFavorite = () => ({
  type: ImagesActions.RECEIVE_FAVORITE
});

export const searchImages = (word, offset) => ({
  type: ImagesActions.SEARCH_IMAGES,
  word,
  offset
});

export const searchMoreImages = (word, offset) => ({
  type: ImagesActions.SEARCH_MORE_IMAGES,
  word,
  offset
});

export const receiveSearchedImages = data => ({
  type: ImagesActions.RECEIVE_SEARCHED_IMAGES,
  data
});

export const addSearchedImages = data => ({
  type: ImagesActions.ADD_SEARCHED_IMAGES,
  data
});

export const createImage = image => ({
  type: ImagesActions.CREATE_IMAGE,
  image
});

export const createSearchCollection = (title, images) => ({
  type: ImagesActions.CREATE_SEARCH_COLLECTION,
  title,
  images
});
