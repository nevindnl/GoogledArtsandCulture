import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import FavoritesHome from './favorites_home';
import {createCollection} from '../../actions/collections_actions';

const mapStatetoProps = state => ({
  collections: state.collections.collections,
  errors: state.collections.errors,
  images: state.images
});

const mapDispatchtoProps = dispatch => ({
  createCollection: (collection, collectedImages) => dispatch(createCollection(collection, collectedImages))
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(FavoritesHome));
