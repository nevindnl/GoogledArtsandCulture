import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Collection from './collection';

const mapStatetoProps = state => ({
	images: state.images.images,
	id: state.collections.currentCollection.id,
	title: state.collections.currentCollection.title,
	description: state.collections.currentCollection.description,
	firstImage: state.collections.currentCollection.firstImage
});

const mapDispatchtoProps = dispatch => ({
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Collection));
