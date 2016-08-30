export const requestImages = (success, error) => {
  $.get({
    url: 'api/images',
    success,
    error
  });
};
