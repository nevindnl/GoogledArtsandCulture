import React from 'react';
import {withRouter} from 'react-router';

import Images from '../images/images_container';
import Collections from '../collections/collections_container';

class Search extends React.Component{
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
          <img src='http://hd.unsplash.com/photo-1446819981653-4df81911e0a1'></img>
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

export default Search;
