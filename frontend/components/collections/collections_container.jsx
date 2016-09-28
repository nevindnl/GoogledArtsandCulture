import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Collections from './collections';

const mapStatetoProps = state => ({
  collections: state.collections.collections
});

export default withRouter(connect(
  mapStatetoProps
)(Collections));
