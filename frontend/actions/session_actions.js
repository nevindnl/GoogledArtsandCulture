export const SessionActions = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  RECEIVE_CURRENT_USER: 'RECEIVE_CURRENT_USER',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
};

export const login = user => ({
  type: SessionActions.LOGIN,
  user
});

export const logout = () => ({
  type: SessionActions.LOGOUT
});

export const signup = user => ({
  type: SessionActions.SIGNUP,
  user
});

export const receiveCurrentUser = user => ({
  type: SessionActions.RECEIVE_CURRENT_USER,
  user
});
export const receiveErrors = errors => ({
  type: SessionActions.RECEIVE_ERRORS,
  errors
});
