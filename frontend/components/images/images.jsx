import React from 'react';
import Masonry from 'react-masonry-component';
import ImageItem from './image_item';

class Images extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (location.hash.match(/search/) !== null){
      $('.images ul').on('click', 'li', e => this.props.router.push(`${location.hash.match(/#(.*)\?/)[1]}/${e.currentTarget.id}`));
    } else {
      $('.images ul').on('click', 'li', e => this.props.router.push(`/images/${e.currentTarget.id}`));
    }
  }

  _searchCollect(e){
    e.preventDefault();
    if(!this.props.currentUser){
      this.props.router.push('/addSession');
    } else {
      this.props.createSearchCollection(location.hash.match(/search\/(.*)\?/)[1], this.props.images);
      this.props.router.push('/favorites');
    }
  }

  render(){
    const imageItems = this.props.images.map((image, i) => (
      <ImageItem image={image} key={image.id}/>
    ));

    return (
      <div className='images'>
        <h3>{this.props.header}</h3>
        <h6>{this.props.subheader}</h6>
        <span>
          <button onClick={this._searchCollect.bind(this)}>COLLECT</button>
        </span>
        <div className='images_container group'>
          <ul className='image_items group'>
            {imageItems}
          </ul>
          <div className='scroll'>
            <img src='http://www.chrisgans1.com/assets/img/Arrow-Down-icon.png' onClick={() => this.props.searchMoreImages(location.hash.match(/search\/(.*)\?/)[1], this.props.images.length)}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Images;
