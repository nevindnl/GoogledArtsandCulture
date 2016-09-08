import React from 'react';
import Masonry from 'react-masonry-component';
import ImageItem from './image_item';

class Images extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $('.images ul').on('click', 'li', e => this.props.router.push(`/images/${e.currentTarget.id}`));
    $(".images_container").mason({
  		itemSelector: ".image_item",
  		ratio: 1.5,
  		sizes: [
  			[1,1],
  			[1,2],
  			[2,2]
  		],
      filler: {
        itemSelector: '.fillerBox',
        filler_class: 'custom_filler'
      },
  		columns: [0, 480, 10],
  		layout: 'fluid',
      gutter: 50,
      fillWidth: true
  	});
  }

  render(){
    const imageItems = this.props.images.map((image, i) => (
      <ImageItem image={image} key={image.id}/>
    ));

    return (
      <div className='images'>
        <h3>{this.props.header}</h3>
        <h6>{this.props.subheader}</h6>
        <div className='images_container group'>
          <div className='fillerBox'></div>
          <ul className='group'>
            {imageItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Images;
