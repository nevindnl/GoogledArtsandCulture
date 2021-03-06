import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Search from './search';

const mapStatetoProps = (state, ownProps) => ({
  images: state.images.images
});

const mapDispatchtoProps = dispatch => ({
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Search));
