import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Images from './images';
import {searchMoreImages, createSearchCollection} from '../../actions/images_actions';

const mapStatetoProps = state => ({
  images: state.images.images,
  currentUser: state.session.currentUser
});

const mapDispatchtoProps = dispatch => ({
  searchMoreImages: (word, offset) => dispatch(searchMoreImages(word, offset)),
  createSearchCollection: (title, images) => dispatch(createSearchCollection(title, images))
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Images));
