import React from 'react';
import {merge} from 'lodash';

import Images from '../images/images_container';
import FormHeader from '../form_header/form_header_container';
import NewCollection from '../new_collection/new_collection_container';

class FavoriteCollection extends React.Component{
  constructor(props){
    super(props);

    this.defaultState = {
      id: 0,
      title: '',
      description: '',
      collectedImages: [],
      toForm: true
    };

    this.state = this.defaultState;
  }

  componentDidMount(){
    $('.errors').addClass('invisible');
  }

  collectImages(){
    this.props.images.forEach(image => {
      $(`#${image.id}`).toggleClass('collected');
    });

    this.setState({
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      collectedImages: this.props.images.map(image => image.id)
    });

    this.props.requestFavoriteImages();

    $('.images ul').off();
    $('.images ul').on('click', 'li', this.collectImage.bind(this));

    $('.favorite_collection').addClass('invisible');
    $('.form_header').addClass('visible');
    $('.errors').addClass('invisible');
    $('.images ul').addClass('collecting');

		window.scrollTo(0,0);
  }

  collectImage(e){
    let target = e.currentTarget;
    let state = merge({}, this.state);

    let index = state.collectedImages.indexOf(parseInt(target.id));

    if(index === -1){
      state.collectedImages.push(parseInt(target.id));
    } else {
      state.collectedImages.splice(index, 1);
    }

    $(target).toggleClass('collected');
    this.setState(state);
  }

  _toForm(){
    this.setState({toForm: false});
    $('.new_collection').addClass('visible');
		window.scrollTo(0,0);
  }

  _fromForm(){
    this.setState({toForm: true});
    $('.new_collection').removeClass('visible');
  }

  _submitForm(){
    this.props.updateCollection(
      {
        collection: {
          id: this.state.id,
          title: this.state.title,
          description: this.state.description
        }
      },
      {
        collectedImages: this.state.collectedImages
      }
    );
    this._exitForm();
    $('.errors').removeClass('invisible');
  }

  _exitForm(){
    $('.form_header').removeClass('visible');
    $('.new_collection').removeClass('visible');
    $('.favorite_collection').removeClass('invisible');
    $('.images li').removeClass('collected');
		$('.errors').addClass('invisible');

    $('.images ul').off();
		
    $('.images ul').removeClass('collecting');

    this.setState(this.defaultState);
    this.props.requestCurrentCollection(this.props.id);
    this.props.requestCollection(this.props.id);

    $('.images ul').on('click', 'li', e => this.props.router.push(`/images/${e.currentTarget.id}`));

		window.scrollTo(0,0);
  }

  _updateForm(property){
    return e => this.setState({[property]: e.target.value});
  }


  _delete(){
    this.props.deleteCollection(this.props.id);
    this.props.router.push('/favorites');
  }

  render(){
    const errorItems = this.props.errors.map((error, i) => (
      <li key={i}>
       {error}
      </li>
    ));

    return(
      <div>
        <FormHeader
          toForm={this.state.toForm}
          _toForm={this._toForm.bind(this)}
          _fromForm={this._fromForm.bind(this)}
          _submitForm={this._submitForm.bind(this)}
          _exitForm={this._exitForm.bind(this)}
        />
      <div className='favorite_collection'>
          <ul className='errors'>
            {errorItems}
          </ul>
          <NewCollection
            _updateForm={this._updateForm.bind(this)}
            title={this.state.title}
            description={this.state.description}
          />
        <div className='favorite_collection_header'>
            <h1>{this.props.title}</h1>
            <h3>{this.props.description}</h3>
            <figure>
              <img src='http://www.freeiconspng.com/uploads/photo-album-icon-png-14.png'></img>
              <h4>{`${this.props.images.length} items`}</h4>
            </figure>
            <section>
              <img src='https://cdn4.iconfinder.com/data/icons/miu/24/editor-pencil-pen-edit-write-glyph-128.png' onClick={this.collectImages.bind(this)}/>
              <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-trash-b-128.png' onClick={this._delete.bind(this)}/>
            </section>
          </div>
          <Images />
        </div>
      </div>
    );
  }
}

export default FavoriteCollection;
