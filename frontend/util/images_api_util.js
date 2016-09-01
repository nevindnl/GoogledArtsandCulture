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
