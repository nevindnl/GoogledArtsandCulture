import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Collection from './collection';

const mapStatetoProps = (state, ownProps) => ({
	images: state.images,
  title: ownProps.location.pathname.slice(23)
});

const mapDispatchtoProps = dispatch => ({

});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Collection));
