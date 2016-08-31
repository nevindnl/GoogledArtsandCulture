import React from 'react';

import Logo from '../logo/logo';
import Images from '../images/images_container';
import Collections from '../collections/collections_container';

const Home = () => (
  <div>
    <div className='banner'>
      <img src='http://hd.unsplash.com/photo-1446819981653-4df81911e0a1'></img>
      <div>
        <Logo />
        <div className='sublogo'>Explore images and collections from around the internet.</div>
      </div>
    </div>
    <Collections header='Collections of the day'/>
    <Images header='Zoom In'/>
  </div>
);

export default Home;
