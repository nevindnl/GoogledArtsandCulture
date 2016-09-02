import React from 'react';

const ImageItem = ({image}) => (
  <li id={image.id}>
    <img src={image.url}></img>
  </li>
);

export default ImageItem;
