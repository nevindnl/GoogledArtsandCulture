import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Image from './image';

const mapStatetoProps = state => ({
	title: state.images.currentImage.title,
	description: state.images.currentImage.description,
	url: state.images.currentImage.url
});

const mapDispatchtoProps = dispatch => ({
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Image));
