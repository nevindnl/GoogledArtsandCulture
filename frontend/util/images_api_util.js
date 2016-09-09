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

export const searchImages = (word, offset, success, error) => {
  $.get({
    dataType: 'json',
    url: `https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${word}&count=30&offset=${offset}&mkt=en-us&safeSearch=Moderate&size=wallpaper`,
    headers: {
      'Ocp-Apim-Subscription-Key': '7101766899a04abb817df9c964aec40c'
    },
    success,
    error
  });
};

export const createImage = (image, success, error) => {
  $.post({
    url: `api/images`,
    data: {image},
    success,
    error
  });
};

export const createSearchCollection = (images, success, error) => {
  $.post({
    url: `api/images/search_collection`,
    data: {images},
    success,
    error
  });
};
