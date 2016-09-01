export const requestCollections = (success, error) => {
  $.get({
    url: 'api/collections',
    success,
    error
  });
};

export const requestFavoriteCollections = (success, error) => {
  $.get({
    url: 'api/collections/favorites',
    success,
    error
  });
};
