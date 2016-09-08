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
  RECEIVE_SEARCHED_IMAGES: 'RECEIVE_SEARCHED_IMAGES'
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

export const searchImages = (word, page) => ({
  type: ImagesActions.SEARCH_IMAGES,
  word,
  page
});

export const receiveSearchedImages = data => ({
  type: ImagesActions.RECEIVE_SEARCHED_IMAGES,
  data
});
