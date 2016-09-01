import React from 'react';
import {withRouter} from 'react-router';

import Logo from '../logo/logo';

const Sidebar = ({router}) => (
  <div className='sidebar'>
    <section className='corner'>
      <img id='sidebar' src='https://cdn2.iconfinder.com/data/icons/bank/100/Bankicons_Set-13-512.png' onClick={() => router.push('/favorites')}></img>
      <Logo />
    </section>
    <section className='home' onClick={() => router.push('/')}>
      <img src='http://downloadicons.net/sites/default/files/home-home-icon-90085.png'></img>
      <h6>Home</h6>
    </section>
    <section className='favorites' onClick={() => router.push('/favorites')}>
      <img src='http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/2000px-Heart_icon_red_hollow.svg.png'></img>
      <h6>Favorites</h6>
    </section>
  </div>
);

export default withRouter(Sidebar);
