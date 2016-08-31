import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import AuthForm from './auth_form/auth_form_container';
import Home from './home/home';
import {requestImages} from '../actions/images_actions';
import {requestCollections} from '../actions/collections_actions';

class AppRouter extends React.Component{
	constructor(props){
		super(props);
	}

  _ensureLoggedIn(e, replace){
    if (!this.context.store.getState().session.currentUser){
      replace('login');
    }
  }

	_home(){
		this.context.store.dispatch(requestImages());
		this.context.store.dispatch(requestCollections());
	}

	render(){
		return (
	    <Router history={hashHistory}>
				<Route path='/addSession' component={AuthForm} />
	      <Route path='/' component={App}>
					<IndexRoute component={Home} onEnter={this._home.bind(this)}/>
	      </Route>
	    </Router>
	  );
	}
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
