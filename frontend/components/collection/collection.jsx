import React from 'react';
import Images from '../images/images_container';

const Collection = ({images, title}) => (
  <div className='collection'>
    <h1>{title}</h1>
		<figure>
			<img src='http://www.freeiconspng.com/uploads/photo-album-icon-png-14.png'></img>
			<h4>{`${images.length} items`}</h4>
		</figure>
		<section>
			<img src='https://cdn4.iconfinder.com/data/icons/miu/24/editor-pencil-pen-edit-write-glyph-128.png' />
			<img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-trash-b-128.png' />
		</section>
    <Images />
  </div>
);

export default Collection;
