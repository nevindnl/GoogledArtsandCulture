import React from 'react';
import {merge} from 'lodash';

import Images from '../images/images_container';
import Collections from '../collections/collections_container';
import FormHeader from '../form_header/form_header_container';

class Favorites extends React.Component{
  constructor(props){
    super(props);
    this.state = {selectedImages: []};
  }

  selectImages(){
    $('.images ul').on('click', 'li', this.selectImage.bind(this));
    $('.favorites').addClass('invisible');
    $('.form_header').addClass('visible');
  }

  selectImage(e){
    let state = merge({}, this.state);
    let index = state.selectedImages.indexOf(e.currentTarget.id);

    if(index === -1){
      state.selectedImages.push(e.currentTarget.id);
    } else {
      state.selectedImages.splice(index, 1);
    }

    this.setState(state);
  }

  render(){
    return (
      <div className='favorites'>
        <FormHeader selectedImages={this.state.selectedImages} />
        {this.props.children}
        <Collections
          header='Collections'
          subheader={`${this.props.collections.length} collections`}
          newCollection={true}
          selectImages={this.selectImages.bind(this)}
          invisible={this.state.docked}
        />
        <Images header='Images' subheader={`${this.props.images.length} items`}/>
      </div>
    );
  }
}

export default Favorites;
