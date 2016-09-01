export const ImagesActions = {
  REQUEST_IMAGES: 'REQUEST_IMAGES',
  RECEIVE_IMAGES: 'RECEIVE_IMAGES',
  REQUEST_FAVORITE_IMAGES: 'REQUEST_FAVORITE_IMAGES',
};

export const requestImages = () => ({
  type: ImagesActions.REQUEST_IMAGES,
});

export const requestFavoriteImages = () => ({
  type: ImagesActions.REQUEST_FAVORITE_IMAGES,
});

export const receiveImages = images => ({
  type: ImagesActions.RECEIVE_IMAGES,
  images
});
