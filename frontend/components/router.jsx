import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import AuthForm from './auth_form/auth_form_container';
import Home from './home/home';
import Favorites from './favorites/favorites';
import FavoritesHome from './favorites_home/favorites_home_container';
import FavoriteCollection from './favorite_collection/favorite_collection_container';
import Collection from './collection/collection_container';
import Image from './image/image_container';
import {clearErrors} from '../actions/session_actions';
import {requestImages, requestFavoriteImages, requestCollection, requestCurrentImage} from '../actions/images_actions';
import {requestCollections, requestFavoriteCollections, requestCurrentCollection} from '../actions/collections_actions';

class AppRouter extends React.Component{
	constructor(props){
		super(props);
	}

	_home(){
		this.context.store.dispatch(requestImages());
		this.context.store.dispatch(requestCollections());
	}

	_favorites(e, replace){
    if (!this.context.store.getState().session.currentUser){
      replace('/addSession');
    } else{
      this.context.store.dispatch(requestFavoriteImages());
      this.context.store.dispatch(requestFavoriteCollections());
    }
	}

	_collection(nextState){
		this.context.store.dispatch(requestCurrentCollection(nextState.params.id));
		this.context.store.dispatch(requestCollection(nextState.params.id));
	}

	_image(nextState){
		this.context.store.dispatch(requestCurrentImage(nextState.params.id));
		$('.header_favorites').removeClass('invisible');
	}

	render(){
		return (
	    <Router history={hashHistory}>
				<Route path='/addSession' component={AuthForm} onLeave={() => this.context.store.dispatch(clearErrors())}/>
	      <Route path='/' component={App}>
					<IndexRoute component={Home} onEnter={this._home.bind(this)} />
					<Route path='/favorites' component={Favorites}>
						<IndexRoute component={FavoritesHome} onEnter={this._favorites.bind(this)} />
						<Route path='/favorites/collections/:id' component={FavoriteCollection} onEnter={this._collection.bind(this)} />
					</Route>
					<Route path='/images/:id' component={Image} onEnter={this._image.bind(this)} onLeave={() => $('.header_favorites').addClass('invisible')}/>
					<Route path='/collections/:id' component={Collection} onEnter={this._collection.bind(this)}/>
	      </Route>
	    </Router>
	  );
	}
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
