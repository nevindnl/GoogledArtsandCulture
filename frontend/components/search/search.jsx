import React from 'react';
import {withRouter} from 'react-router';

import Images from '../images/images_container';

class Search extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='search_results'>
        <Images header={this.props.images.length + ' items'}/>
      </div>
    );
  }
}

export default Search;
