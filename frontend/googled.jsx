import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';

import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preLoadedState = {};

  if (window.currentUser){
    preLoadedState = {session: {currentUser: window.currentUser}};
  }

	hashHistory.listen(location => {
		if (location.action !== 'POP') {
			window.scrollTo(0,0);
		}
	});

  const store = configureStore(preLoadedState);
  ReactDOM.render(<Root store={store}/>, root);
});
