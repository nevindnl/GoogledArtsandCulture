import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {searchImages} from '../../actions/images_actions';
import SearchHeader from './search_header';

const mapStatetoProps = (state, ownProps) => ({
});

const mapDispatchtoProps = dispatch => ({
  searchImages: (word, offset) => dispatch(searchImages(word, offset))
});

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(SearchHeader));
