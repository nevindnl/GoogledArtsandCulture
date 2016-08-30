import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {login, signup} from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStatetoProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchtoProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return ({
    processForm: user => dispatch(processForm(user)),
    formType
  });
};

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(AuthForm));
