import React from 'react';
import {withRouter} from 'react-router';

import Logo from '../logo/logo';

const Sidebar = ({router}) => (
  <div className='sidebar'>
    <section className='root'>
      <img id='sidebar_sidebar' src='https://cdn2.iconfinder.com/data/icons/bank/100/Bankicons_Set-13-512.png'></img>
      <Logo />
    </section>
    <section id='sidebar_home' onClick={() => router.push('/')}>
      <div className='hover'>
        <img src='http://www.imsorrytohear.com/images/icon-home.png'></img>
        <h6>Home</h6>
      </div>
    </section>
    <section id='sidebar_favorites' onClick={() => router.push('/favorites')}>
      <div className='hover'>
        <img src='http://uploads.webflow.com/5462660fae5a7cad37e268b7/5462bf4e0d6292d7419a2326_icon-heart-grey.png'></img>
        <h6>Favorites</h6>
      </div>
    </section>
  </div>
);

export default withRouter(Sidebar);
