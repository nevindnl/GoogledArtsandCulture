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

export const requestCollection = (id, success, error) => {
  $.get({
    url: 'api/images/collection',
    data: {id},
    success,
    error
  });
};
