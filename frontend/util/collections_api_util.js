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

export const createCollection = (collection, collectedImages, success, error) => {
  $.post({
    url: 'api/collections/',
    data: collection,
    success: () => {
      $.post({
        url: 'api/collected_images/collect',
        data: collectedImages,
        success
      });
    },
    error
  });
};
