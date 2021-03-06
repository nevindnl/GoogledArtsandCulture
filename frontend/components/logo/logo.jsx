import React from 'react';
import {withRouter} from 'react-router';

const Logo = ({router}) => (
  <div className='logo' onClick={() => router.push('/')}>
    <div id='googled'>Googled</div>
  </div>
);


export default withRouter(Logo);
