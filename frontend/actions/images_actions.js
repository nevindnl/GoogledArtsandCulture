export const ImagesActions = {
  REQUEST_IMAGES: 'REQUEST_IMAGES',
  REQUEST_FAVORITE_IMAGES: 'REQUEST_FAVORITE_IMAGES',
  REQUEST_COLLECTION: 'REQUEST_COLLECTION',
  RECEIVE_IMAGES: 'RECEIVE_IMAGES',
};

export const requestImages = () => ({
  type: ImagesActions.REQUEST_IMAGES,
});

export const requestFavoriteImages = () => ({
  type: ImagesActions.REQUEST_FAVORITE_IMAGES,
});

export const requestCollection = (title) => ({
  type: ImagesActions.REQUEST_COLLECTION,
  title
});

export const receiveImages = images => ({
  type: ImagesActions.RECEIVE_IMAGES,
  images
});
