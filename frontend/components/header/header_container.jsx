import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {logout} from '../../actions/session_actions';
import {toggleFavorite, createImage} from '../../actions/images_actions';
import Header from './header';

const mapStatetoProps = state => ({
  currentUser: state.session.currentUser,
  currentImage: state.images.currentImage
});

const mapDispatchtoProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleFavorite: id => dispatch(toggleFavorite(id)),
  createImage: image => dispatch(createImage(image))
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Header));
