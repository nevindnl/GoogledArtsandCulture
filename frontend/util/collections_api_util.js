import {merge} from 'lodash';

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

export const requestCurrentCollection = (id, success, error) => {
  $.get({
    url: `api/collections/${id}`,
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

export const updateCollection = (collection, collectedImages, success, error) => {
  $.ajax({
    type: 'PATCH',
    url: `api/collections/${collection.id}`,
    data: collection,
    success: () => {
      $.post({
        url: 'api/collected_images/recollect',
        data: merge({id: collection.collection.id}, collectedImages),
        success
      });
    },
    error
  });
};

export const deleteCollection = (id, success, error) => {
  $.ajax({
    type: 'DELETE',
    url: `api/collections/${id}`,
    success,
    error
  });
};
