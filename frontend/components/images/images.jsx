import React from 'react';

import ImageItem from './image_item';

class Images extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $('.images ul').on('click', 'li', e => this.props.router.push(`/images/${e.currentTarget.id}`));
  }

  render(){
    const imageItems = this.props.images.map(image => (
      <ImageItem image={image} key={image.id} />
    ));

    return (
      <div className='images'>
        <h3>{this.props.header}</h3>
        <h6>{this.props.subheader}</h6>
        <ul>
          {imageItems}
        </ul>
      </div>
    );
  }
}

export default Images;
