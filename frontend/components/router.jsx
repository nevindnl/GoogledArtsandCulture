import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import AuthForm from './auth_form/auth_form_container';
import Home from './home/home';
import Favorites from './favorites/favorites_container';
import {requestImages, requestFavoriteImages} from '../actions/images_actions';
import {requestCollections, requestFavoriteCollections} from '../actions/collections_actions';

class AppRouter extends React.Component{
	constructor(props){
		super(props);
	}

  _ensureLoggedIn(e, replace){

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

	render(){
		return (
	    <Router history={hashHistory}>
				<Route path='/addSession' component={AuthForm} />
	      <Route path='/' component={App}>
					<IndexRoute component={Home} onEnter={this._home.bind(this)}/>
					<Route path='favorites' component={Favorites} onEnter={this._favorites.bind(this)}/>
	      </Route>
	    </Router>
	  );
	}
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
