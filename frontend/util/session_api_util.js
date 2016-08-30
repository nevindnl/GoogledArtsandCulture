export const login = (user, success, error) => {
  $.post({
    url: 'api/session',
    data: user,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    type: 'DELETE',
    url: 'api/session',
    success,
    error
  });
};

export const signup = (user, success, error) => {
  $.post({
    url: 'api/users',
    data: user,
    success,
    error
  });
};
