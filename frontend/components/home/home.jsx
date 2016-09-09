import React from 'react';
import {withRouter} from 'react-router';

import Logo from '../logo/logo';
import Images from '../images/images_container';
import Collections from '../collections/collections_container';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $('.collections ul').on('click', 'li', e => this.props.router.push(`/collections/${e.currentTarget.id}`));
  }

  render(){
    return (
      <div className='group'>
        <div className='banner'>
          <img src='https://hd.unsplash.com/photo-1430508522325-7421aca30dfc'></img>
          <div>
            <Logo />
            <div id='sublogo' onClick={() => this.props.router.push('/')}>Explore images and collections from around the internet.</div>
          </div>
        </div>
        <Collections header='Collections of the day'/>
        <Images header='Zoom In'/>
      </div>
    );
  }
}


export default withRouter(Home);
