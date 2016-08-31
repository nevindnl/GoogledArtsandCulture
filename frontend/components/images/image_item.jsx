import React from 'react';

const ImageItem = ({image}) => (
  <li>
    <img src={image.url}></img>
  </li>
);

export default ImageItem;
