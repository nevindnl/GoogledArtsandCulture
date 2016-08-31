export const requestCollections = (success, error) => {
  $.get({
    url: 'api/collections',
    success,
    error
  });
};
