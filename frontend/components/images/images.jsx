import React from 'react';

import ImageItem from './image_item';

const Images = ({images}) => {
  const imageItems = images.map(image => (
    <ImageItem image={image} key={image.id} />
  ));

  return (
    <ul className='images'>
      {imageItems}
    </ul>
  );
};

export default Images;
