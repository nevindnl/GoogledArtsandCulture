export const login = (user, success, error) => {
  $.post({
    url: 'api/session',
    data: user,
    success,
    error
  });
};

export const logout = (error) => {
  $.ajax({
    type: 'DELETE',
    url: 'api/session',
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
