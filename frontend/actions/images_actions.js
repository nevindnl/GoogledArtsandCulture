export const ImagesActions = {
  REQUEST_IMAGES: 'REQUEST_IMAGES',
  RECEIVE_IMAGES: 'RECEIVE_IMAGES',
};

export const requestImages = () => ({
  type: ImagesActions.REQUEST_IMAGES,
});

export const receiveImages = images => ({
  type: ImagesActions.RECEIVE_IMAGES,
  images
});
