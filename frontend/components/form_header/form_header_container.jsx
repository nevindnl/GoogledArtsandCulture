import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import FormHeader from './form_header';

const mapStatetoProps = state => ({
});

const mapDispatchtoProps = dispatch => ({
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(FormHeader));
