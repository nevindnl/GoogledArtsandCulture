import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Collection from './collection';

const mapStatetoProps = state => ({
  images: state.images
});

const mapDispatchtoProps = dispatch => ({

});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Collection));
