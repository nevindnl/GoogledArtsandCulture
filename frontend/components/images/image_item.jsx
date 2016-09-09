import React from 'react';
import {withRouter} from 'react-router';

const ImageItem = ({image}) => (
  <li id={image.id} className='image_item'>
    <img src={image.thumbUrl}></img>
  </li>
);



export default ImageItem;
