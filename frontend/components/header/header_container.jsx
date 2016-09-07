import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {logout} from '../../actions/session_actions';
import {toggleFavorite} from '../../actions/images_actions';
import Header from './header';

const mapStatetoProps = state => ({
  currentUser: state.session.currentUser,
  id: state.images.currentImage.id,
  favorited: state.images.currentImage.favorited
});

const mapDispatchtoProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleFavorite: id => dispatch(toggleFavorite(id))
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Header));
