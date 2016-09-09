import React from 'react';
import {merge} from 'lodash';

class Image extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
		$('.header_favorites').removeClass('invisible');
		
    $('#thumb').attr('mag-thumb', 'inner');
    $('#zoom').attr('mag-zoom', 'inner');

    let $host = $('[mag-thumb="inner"]');
    $host.mag({zoomMax: 10});
  }

  render(){
    return(
      <div className='image'>

        <div className='image-zoom'>
         <div id='thumb'>
           <img src={this.props.url} />
         </div>
         <div id='zoom'>
           <img src={this.props.url} />
         </div>
       </div>

        <div className='image_header'>
          <h1>{this.props.title}</h1>
          <a className='url' href={this.props.url}>
            <h4>{this.props.url}</h4>
          </a>
        </div>
      </div>
    );
  }
}

export default Image;
