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

export const requestCurrentImage = (id, success, error) => {
  $.get({
    url: `api/images/${id}`,
    data: {id},
    success,
    error
  });
};

export const toggleFavorite = (id, success, error) => {
  $.post({
    url: `api/images/favorite`,
    data: {id},
    success,
    error
  });
};
