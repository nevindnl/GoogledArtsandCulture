import React from 'react';
import ImageItem from './image_item';

class Images extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
		const $grid = $('.image_items');
		const $container = $('.images_container');

		function infiniteScroll(){
			const width = $grid.width() - $container.width();

			if (width - $container.scrollLeft() < 100 && this.props.images.length < 50){
				$container.off();
				this._search();

				window.setTimeout(() => $container.on('scroll', infiniteScroll.bind(this)), 500);
			}
		}

    if (location.hash.match(/search/) !== null){
      $grid.on('click', 'li', e => this.props.router.push(`${location.hash.match(/#\/(.*)\?/)[1]}/${e.currentTarget.id}`));
			$container.on('scroll', infiniteScroll.bind(this));
    } else {
      $grid.on('click', 'li', e => this.props.router.push(`/images/${e.currentTarget.id}`));
    }
	}

	componentDidUpdate(){
		const $grid = $('.image_items');

		$grid.imagesLoaded().progress(() => {
			if ($grid.data('packery')) $grid.packery('reloadItems');

			$grid.packery({
				horizontal: true,
				itemSelector: '.image_item',
				gutter: 10,
				transitionDuration: '0.8s'
			});
		});
	}


	_search(){
		this.props.searchMoreImages(location.hash.match(/search\/(.*)\?/)[1], this.props.images.length);
	}

  _searchCollect(e){
    e.preventDefault();
    if(!this.props.currentUser){
      this.props.router.push('/addSession');
    } else {
      this.props.createSearchCollection(location.hash.match(/search\/(.*)\?/)[1], this.props.images);
      this.props.router.push('/favorites');
			$('.search_header input').val('');
			$('.search_header').removeClass('visible');
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
        </div>
      </div>
    );
  }
}

export default Images;
