import {SessionActions, login, logout, signup, receiveCurrentUser, receiveErrors} from '../actions/session_actions';
import * as SessionAPI from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  let success = user => dispatch(receiveCurrentUser(user));
  let errors = data => dispatch(receiveErrors(data));

  switch(action.type){
    case SessionActions.LOGIN:
      SessionAPI.login(action.user, success, errors);
      return next(action);
    case SessionActions.LOGOUT:
      SessionAPI.logout(errors);
      return next(action);
    case SessionActions.SIGNUP:
      SessionAPI.signup(action.user, success, errors);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
