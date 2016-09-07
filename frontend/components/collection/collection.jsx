import React from 'react';
import {merge} from 'lodash';

import Images from '../images/images_container';

class Collection extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className='collection'>
          <div className='collection_header'>
            <h1>{this.props.title}</h1>
            <h3>{this.props.description}</h3>
          </div>
          <Images />
        </div>
      </div>
    );
  }
}

export default Collection;
