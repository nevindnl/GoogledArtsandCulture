import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import NewCollection from './new_collection';

const mapStatetoProps = (state, ownProps) => ({
  errors: state.collections.errors
});

const mapDispatchtoProps = dispatch => ({
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(NewCollection));
