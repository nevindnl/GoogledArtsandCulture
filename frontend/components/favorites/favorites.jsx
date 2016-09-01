import React from 'react';

import Images from '../images/images_container';
import Collections from '../collections/collections_container';

const Favorites = ({collections, images}) => {
  return (
    <div className='favorites'>
      <h3>Collections</h3>
      <h6>{collections.length} collections</h6>
      <Collections />
      <h3>Images</h3>
      <h6>{images.length} items</h6>
      <Images />
    </div>
  );
};

export default Favorites;
