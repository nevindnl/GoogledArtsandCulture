import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import Images from './images';

const mapStatetoProps = state => ({
  images: state.images,
});

export default withRouter(connect(
  mapStatetoProps
)(Images));
