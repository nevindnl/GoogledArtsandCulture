import React from 'react';

import ImageItem from './image_item';

const Images = ({images, header}) => {
  const imageItems = images.map(image => (
    <ImageItem image={image} key={image.id} />
  ));

  return (
    <div className='images'>
      <h3>{header}</h3>
      <ul>
        {imageItems}
      </ul>
    </div>
  );
};

export default Images;
