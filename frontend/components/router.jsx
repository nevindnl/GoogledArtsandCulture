import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import AuthForm from './auth_form/auth_form_container';
import Home from './home/home';
import Favorites from './favorites/favorites';
import FavoritesHome from './favorites_home/favorites_home_container';
import Collection from './collection/collection_container';
import {requestImages, requestFavoriteImages, requestCollection} from '../actions/images_actions';
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

	render(){
		return (
	    <Router history={hashHistory}>
				<Route path='/addSession' component={AuthForm} />
	      <Route path='/' component={App}>
					<IndexRoute component={Home} onEnter={this._home.bind(this)} />
					<Route path='/favorites' component={Favorites}>
						<IndexRoute component={FavoritesHome} onEnter={this._favorites.bind(this)} />
						<Route path='/favorites/collections/:id' component={Collection} onEnter={this._collection.bind(this)} />
					</Route>
	      </Route>
	    </Router>
	  );
	}
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
