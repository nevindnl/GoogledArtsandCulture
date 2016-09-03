export const requestImages = (success, error) => {
  $.get({
    url: 'api/images',
    success,
    error
  });
};

export const requestFavoriteImages = (success, error) => {
  $.get({
    url: 'api/images/favorites',
    success,
    error
  });
};

export const requestCollection = (title, success, error) => {
  $.get({
    url: 'api/images/collection',
    data: {title},
    success,
    error
  });
};
