import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import FavoriteCollection from './favorite_collection';
import {requestFavoriteImages, requestCollection} from '../../actions/images_actions';
import {updateCollection, deleteCollection, requestCurrentCollection} from '../../actions/collections_actions';

const mapStatetoProps = state => ({
	images: state.images.images,
	id: state.collections.currentCollection.id,
	title: state.collections.currentCollection.title,
	description: state.collections.currentCollection.description,
	errors: state.collections.errors
});

const mapDispatchtoProps = dispatch => ({
	requestFavoriteImages: () => dispatch(requestFavoriteImages()),
	requestCurrentCollection: id => dispatch(requestCurrentCollection(id)),
	requestCollection: id => dispatch(requestCollection(id)),
	updateCollection: (collection, collectedImages) => dispatch(updateCollection(collection, collectedImages)),
	deleteCollection: id => dispatch(deleteCollection(id))
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(FavoriteCollection));
