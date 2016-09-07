import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {login, signup, clearErrors} from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStatetoProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchtoProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(AuthForm));
