import React from 'react';
import {withRouter} from 'react-router';

const Logo = ({router}) => (
  <div className='logo' onClick={() => router.push('/')}>
    <div className='googled'>Googled</div>
    <div>Arts & Culture</div>
  </div>
);


export default withRouter(Logo);
