import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Favorites from './favorites';

const mapStatetoProps = state => ({
  collections: state.collections,
  images: state.images
});

export default withRouter(connect(
  mapStatetoProps
)(Favorites));
