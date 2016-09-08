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
          <div className='collection_image_container'>
            <img src={this.props.firstImage.url} onClick={() => this.props.router.push(`/images/${this.props.firstImage.id}`)}></img>
          </div>
          <div className='collection_header'>
            <h1>{this.props.title}</h1>
            <h3>{this.props.description}</h3>
          </div>
          <Images header={this.props.images.length + ' items'}/>
        </div>
      </div>
    );
  }
}

export default Collection;
