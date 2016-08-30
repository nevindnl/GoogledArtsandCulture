import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import AuthForm from './auth_form/auth_form_container';

class AppRouter extends React.Component{
	constructor(props){
		super(props);
	}

  _ensureLoggedIn(e, replace){
    if (!this.context.store.getState().session.currentUser){
      replace('login');
    }
  }

	render(){
		return (
	    <Router history={hashHistory}>
				<Route path='/addSession' component={AuthForm} />
	      <Route path='/' component={App}>
	      </Route>
	    </Router>
	  );
	}
}

export default AppRouter;
