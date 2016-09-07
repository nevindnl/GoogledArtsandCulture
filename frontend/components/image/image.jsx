import React from 'react';
import {merge} from 'lodash';

class Image extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $('#thumb').attr('mag-thumb', 'inner');
    $('#zoom').attr('mag-zoom', 'inner');

    let $host = $('[mag-thumb="inner"]');
    $host.mag({zoomMax: 50});
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
          <h4> From {this.props.url}</h4>
          <h3>{this.props.description}</h3>
        </div>
      </div>
    );
  }
}

export default Image;
