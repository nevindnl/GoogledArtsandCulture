import React from 'react';
import {merge} from 'lodash';

import Images from '../images/images_container';
import Collections from '../collections/collections_container';
import FormHeader from '../form_header/form_header_container';
import NewCollection from '../new_collection/new_collection_container';

class FavoritesHome extends React.Component{
  constructor(props){
    super(props);

    this.defaultState = {
      title: '',
      description: '',
      collectedImages: [],
      toForm: true
    };

    this.state = this.defaultState;
  }

  componentDidMount(){
    $('.collections').on('click', 'li', e => {
			if (e.currentTarget.id !== 'none'){
				this.props.router.push(`/favorites/collections/${e.currentTarget.id}`);
			}
    });
  }

  collectImages(){
    $('.images ul').on('click', 'li', this.collectImage.bind(this));
    $('.favorites').addClass('invisible');
    $('.form_header').addClass('visible');
    $('.errors').addClass('invisible');
  }

  collectImage(e){
    let target = $(e.currentTarget);
    let state = merge({}, this.state);

    let index = state.collectedImages.indexOf(target.id);

    if(index === -1){
      state.collectedImages.push(target.id);
    } else {
      state.collectedImages.splice(index, 1);
    }

    target.toggleClass('collected');
    this.setState(state);
  }

  _toForm(){
    this.setState({toForm: false});
    $('.new_collection').addClass('visible');
  }

  _fromForm(){
    this.setState({toForm: true});
    $('.new_collection').removeClass('visible');
  }

  _submitForm(){
    this.props.createCollection(
      {
        collection: {
          title: this.state.title,
          description: this.state.description
        }
      },
      {
        collectedImages: this.state.collectedImages
      }
    );
    this._exitForm();
  }

  _exitForm(){
    $('.form_header').removeClass('visible');
    $('.new_collection').removeClass('visible');
    $('.favorites').removeClass('invisible');
    $('.images li').removeClass('collected');
    $('.errors').removeClass('invisible');
    this.setState(this.defaultState);
  }

  _updateForm(property){
    return e => this.setState({[property]: e.target.value});
  }

  render(){
    const errorItems = this.props.errors.map((error, i) => (
      <li key={i}>
       {error}
      </li>
    ));

    return (
      <div>
        <FormHeader
          toForm={this.state.toForm}
          _toForm={this._toForm.bind(this)}
          _fromForm={this._fromForm.bind(this)}
          _submitForm={this._submitForm.bind(this)}
          _exitForm={this._exitForm.bind(this)}
        />
      <div className='favorites'>
        <ul className='errors'>
          {errorItems}
        </ul>
        <NewCollection
          _updateForm={this._updateForm.bind(this)}
          title={this.state.title}
          description={this.state.description}
        />
        <Collections
          header='Collections'
          subheader={`${this.props.collections.length} collections`}
          newCollection={true}
          collectImages={this.collectImages.bind(this)}
        />
      <Images header='All' subheader={`${this.props.images.length} items`}/>
      </div>
    </div>
    );
  }
}

export default FavoritesHome;
