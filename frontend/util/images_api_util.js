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

export const searchImages = (word, page, success, error) => {
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    contentType: 'application/json',
    url: `https://cse.google.com:443/cse/publicurl?cx=013556309943456998348:sgy4bdune-u&q=cool&imgSize=xlarge&key=AIzaSyA9CVjoqYmNqRtsnLFhD7DIasKs4aeTfWE&searchtype=image&start=${30 * page}&num=30&as_filetype=png`,
    success,
    error
  });
};
